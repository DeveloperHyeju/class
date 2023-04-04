import { IQuery } from "@/src/commons/types/generated/types";
import { ChangeEvent } from "react";


export interface IBoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IUpdateVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: () => void
    onClickUpdate: () => void
    onChangeWriter: (e :ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (e :ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (e :ChangeEvent<HTMLInputElement>) => void
    myColor: boolean
    isEdit: boolean
    data: Pick<IQuery, "fetchBoard">
}

export interface IBlueButtonProps {
    myColor: boolean
}