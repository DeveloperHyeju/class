import * as style from "./boardWrite.styles";



const BoardWriteUI = ({onClickSubmit, onClickUpdate, onChangeWriter, onChangeTitle, onChangeContents, myColor, isEdit}) => {

    return(
        <>
            작성자: <style.RedInput type="text" onChange={onChangeWriter} />  <br />
            제목: <input type="text" onChange={onChangeTitle} /> <br />
            내용: <input type="text" onChange={onChangeContents} /> <br />
            {isEdit ? 
            <style.BlueButton myColor={myColor} onClick={onClickUpdate}>수정하기</style.BlueButton> :
            <style.BlueButton myColor={myColor} onClick={onClickSubmit}>등록하기</style.BlueButton>}
        </>
    );

};


export default BoardWriteUI;