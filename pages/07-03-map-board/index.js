import { gql, useQuery } from "@apollo/client";

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

const StaticRoutedPage1 = () => {

    const { data } = useQuery(FETCH_BOARDS);

    const boardList = data?.fetchBoards.map(board => {
        return(
            <div>
                <input type="checkbox" />
                <span>{board.number}</span>
                <span>{board.title}</span>
                <span>{board.writer}</span>
                <span>{board.contents}</span>
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