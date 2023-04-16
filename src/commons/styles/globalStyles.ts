import { css } from "@emotion/react";

export const globalStyles = css({
  "*": {
    margin: "0",
    boxSizing: "border-box",
    fontSize: "1rem",
    fontFamily: "myFont",
  },

  "@font-face": {
    fontFamily: "myFont",
    src: "url('/font/scifibit.ttf')",
  },
});
