import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = async (e: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(e.currentTarget.id) }); // event.target은 무조건 id가 있지 않기 때문에(지금은 태그지만 아닐떄도 있음) currentTarget을 써줌
    // 뭔가 refetch 하고나서 다른 작업을 처리해야하면 await로 기다려야하지만 그게아니면 걍 void (생략간으)로 무시해도 됨
  };

  const boardList = data?.fetchBoards.map((board) => {
    return (
      <>
        <div key={board._id}>
          <span>{board.title}</span>
          <span>{board.writer}</span>
        </div>

        {/* <span id="1" onClick={onClickPage}>
          1
        </span>
        <span id="2" onClick={onClickPage}>
          2
        </span>
        <span id="3" onClick={onClickPage}>
          3
        </span> */}
        {data?.fetchBoards.map((page, index) => {
          return (
            <span key={page._id} id={String(index + 1)} onClick={onClickPage}>
              {index + 1}
            </span>
          );
        })}
      </>
    );
  });

  return <div>{boardList}</div>;
};

export default StaticRoutedPage1;
