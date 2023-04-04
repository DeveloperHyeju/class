import * as style from "./BoardWrite.styles";
import { ChangeEvent } from "react";
import { IBoardWriteUIProps } from "./BoardWrite.types";


const BoardWriteUI = (props: IBoardWriteUIProps) => {

    return(
        <>
            작성자: <style.RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />  <br />
            제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title} /> <br />
            내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} /> <br />
            {props.isEdit ? 
            <style.BlueButton myColor={props.myColor} onClick={props.onClickUpdate}>수정하기</style.BlueButton> :
            <style.BlueButton myColor={props.myColor} onClick={props.onClickSubmit}>등록하기</style.BlueButton>}
        </>
    );

};


export default BoardWriteUI;