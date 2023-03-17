import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;


const DELETE_BOARD = gql`
    mutation deleteBoard ($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

const StaticRoutedPage1 = () => {

    const { data } = useQuery(FETCH_BOARDS);
    const [ deleteBoard ] = useMutation(DELETE_BOARD);


    const onClickDeleteBoard = (number) => {
        deleteBoard({
            variables: {
                number
            },
            refetchQueries: [{query:FETCH_BOARDS}]
        });
    };


    const boardList = data?.fetchBoards.map(board => {
        return(
            <div key={board.number}>
                <input type="checkbox" />
                <span>{board.number}</span>
                <span>{board.title}</span>
                <span>{board.writer}</span>
                <span>{board.contents}</span>
                <span><button onClick={e => onClickDeleteBoard(board.number)}>삭제</button></span>
            </div>
        );
    });
  
    return(
        <div>
            {boardList}
        </div>
    );

};


export default StaticRoutedPage1;