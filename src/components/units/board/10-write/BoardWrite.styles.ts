import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input({
    borderColor: "red",
});

export const BlueButton = styled.button({}, (props: IBlueButtonProps) => ({backgroundColor:props.myColor ? "yellow" : "default"}));