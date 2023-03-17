import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";


const BoardWrite = () => {

    const [ myColor, setMyColor ] = useState(false);

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ writer, setWriter ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');


    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {
                writer: writer,
                title: title,
                contents: contents,
            }
        });
        console.log(result);
        alert(result.data.createBoard.message); 
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
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                myColor={myColor} />;

};


export default BoardWrite;