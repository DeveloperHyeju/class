import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";

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
  const [commentIndex, setCommentIndex] = useState(5);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickShowEditForm = (e: MouseEvent<HTMLButtonElement>) => {
    setCommentIndex(Number(e.currentTarget.id));
  };

  const boardList = data?.fetchBoards.map((board, index) => (
    <div key={board._id}>
      {index !== commentIndex && (
        <>
          <span>{board.title}</span>
          <span>{board.writer}</span>
          <button id={String(index)} onClick={onClickShowEditForm}>
            수정하기
          </button>
        </>
      )}
      {index === commentIndex && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  ));

  return <div>{boardList}</div>;
};

export default StaticRoutedPage1;
