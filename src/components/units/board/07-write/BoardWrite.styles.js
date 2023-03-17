import styled from "@emotion/styled";

export const RedInput = styled.input({
    borderColor: "red",
});


export const BlueButton = styled.button({}, ({myColor}) => ({backgroundColor:myColor ? "yellow" : "default"}));