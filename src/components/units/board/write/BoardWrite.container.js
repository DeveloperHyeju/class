import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWrite.queries";


const BoardWrite = () => {

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
    };


    const onChangeTitle = (e) => {
        const { value } = e.target;
        setTitle(value);
    };

    const onChangeContents = (e) => {
        const { value } = e.target;
        setContents(value);
    };

    return <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}/>;

};


export default BoardWrite;