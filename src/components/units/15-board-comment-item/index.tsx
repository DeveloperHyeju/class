import { IBoard } from "@/src/commons/types/generated/types";
import { useState } from "react";

interface IProps {
  board: IBoard;
}

const BoardCommentItem = ({ board }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickShowEditForm = () => {
    setIsEdit(true);
  };

  return (
    <div key={board._id}>
      {!isEdit && (
        <>
          <span>{board.title}</span>
          <span>{board.writer}</span>
          <button onClick={onClickShowEditForm}>수정하기</button>
        </>
      )}
      {isEdit && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  );
};

export default BoardCommentItem;
