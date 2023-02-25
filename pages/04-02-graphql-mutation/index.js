import { useMutation, gql } from "@apollo/client";


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"토토로", title: "이웃집 토토로 마을", contents:"토토로, 토토로! 토토로, 토토로!") {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {
    
    
    const [ graphqlFunction ] = useMutation(CREATE_BOARD);


    const onClickSubmit = async () => {
        const result = await graphqlFunction();
        console.log(result);
        alert(result.data.createBoard.message); 
    };



    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );

};


export default GraphqlMutationPage;