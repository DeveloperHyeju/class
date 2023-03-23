import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";


const BoardWrite = ({isEdit, data}) => {

    const router = useRouter();
    
    const [ myColor, setMyColor ] = useState(false);

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ updateBoard ] = useMutation(UPDATE_BOARD);
    const [ writer, setWriter ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');


    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                writer,
                title,
                contents,
            }
        });

        console.log(result);
        alert(result.data.createBoard.message);
        const boardNum = result.data.createBoard.number;
        router.push(`/09-01-boards/${boardNum}`);
    };


    const onClickUpdate = async () => {
        const updateVariables = {
            number: Number(router.query.boardNum),
        };
        
        if (writer) updateVariables.writer = writer;
        if (title) updateVariables.title = title;
        if (contents) updateVariables.contents = contents;

        const result = await updateBoard({
            variables: updateVariables,
        });

        console.log(result);
        alert(result.data.updateBoard.message);
        const boardNum = result.data.updateBoard.number;
        router.push(`/09-01-boards/${boardNum}`);
    };


    const onChangeWriter = (e) => {
        const { value } = e.target;
        setWriter(value);
        if( value && title && contents) {
            setMyColor(true);
        }
    };


    const onChangeTitle = (e) => {
        const { value } = e.target;
        setTitle(value);
        if( writer && value && contents) {
            setMyColor(true);
        }
    };


    const onChangeContents = (e) => {
        const { value } = e.target;
        setContents(value);
        if( writer && title && value) {
            setMyColor(true);
        }
    };

    return <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                myColor={myColor} 
                isEdit={isEdit}
                data={data} />;

};


export default BoardWrite;