import BoardWriteUI from "./BoardWrite.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IUpdateVariables } from "./BoardWrite.types";


const BoardWrite = (props: IBoardWriteProps) => {

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
        router.push(`/10-01-typescript-boards/${boardNum}`);
    };


    const onClickUpdate = async () => {
        const updateVariables: IUpdateVariables = {
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
        router.push(`/10-01-typescript-boards/${boardNum}`);
    };


    const onChangeWriter = (e :ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setWriter(value);
        if( value && title && contents) {
            setMyColor(true);
        }
    };


    const onChangeTitle = (e :ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTitle(value);
        if( writer && value && contents) {
            setMyColor(true);
        }
    };


    const onChangeContents = (e :ChangeEvent<HTMLInputElement>) => {
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
                isEdit={props.isEdit}
                data={props.data} />;

};


export default BoardWrite;