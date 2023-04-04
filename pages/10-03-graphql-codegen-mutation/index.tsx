import { IMutation, IMutationCreateBoardArgs } from "@/src/commons/types/generated/types";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {
    
    
    const [ graphqlFunction ] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
    const [ writer, setWriter ] = useState<string>(''); // 추론하기 때문에 굳이 타입을 넣을 필요 없다.
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');


    const onClickSubmit = async () => {
        const result = await graphqlFunction({
            variables: {
                writer: writer,
                title: title,
                contents: contents,
            }
        });
        console.log(result);
        alert(result.data?.createBoard?.message); 
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



    return(
        <>
            작성자: <input type="text" onChange={onChangeWriter} />  <br />
            제목: <input type="text" onChange={onChangeTitle} /> <br />
            내용: <input type="text" onChange={onChangeContents} /> <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );

};


export default GraphqlMutationPage;