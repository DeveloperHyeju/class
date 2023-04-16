import styled from "@emotion/styled";
import { Rate } from "antd";

const MyStar = styled(Rate)({
  fontSize: "5rem",
  color: "red",
});

const LibraryIconPage = () => {
  return <MyStar />;
};

export default LibraryIconPage;
