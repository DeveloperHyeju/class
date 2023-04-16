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
  const [commentIndex, setCommentIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickShowEditForm = (e: MouseEvent<HTMLButtonElement>) => {
    const copyCommentIndex = [...commentIndex]; // 만약 복사 안하고 걍 원본 commentIndex를 그대로 넣어버리면 commentIndex를 다이렉트로 변경하는게 되어버려서 setCommentIndex할때 바뀐게 없다고 판단해서 setState가 실행되지 않아버림
    copyCommentIndex[Number(e.currentTarget.id)] = true;
    setCommentIndex(copyCommentIndex);
  };

  const boardList = data?.fetchBoards.map((board, index) => (
    <div key={board._id}>
      {commentIndex[index] === false && (
        <>
          <span>{board.title}</span>
          <span>{board.writer}</span>
          <button id={String(index)} onClick={onClickShowEditForm}>
            수정하기
          </button>
        </>
      )}
      {commentIndex[index] === true && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  ));

  return <div>{boardList}</div>;
};

export default StaticRoutedPage1;
