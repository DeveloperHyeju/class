import { SmileOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const Icon = styled(SmileOutlined)({
  color: "red",
  fontSize: "5rem",
});

const onClickhandler = (e: MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.id);
  // 아무것도 출력되지 않는다.
};

const LibraryIconPage = () => {
  return (
    <button id="smile" onClick={onClickhandler}>
      <Icon />
    </button>
  );
};

export default LibraryIconPage;
