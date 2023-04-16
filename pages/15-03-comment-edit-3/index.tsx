import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import BoardCommentItem from "@/src/components/units/15-board-comment-item";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage1 = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const boardList = data?.fetchBoards.map((board, index) => (
    <BoardCommentItem key={board._id} board={board} />
  ));

  return <div>{boardList}</div>;
};

export default StaticRoutedPage1;
