import * as style from "./boardWrite.styles";



const BoardWriteUI = ({onClickSubmit, onChangeWriter, onChangeTitle, onChangeContents, myColor}) => {

    return(
        <>
            작성자: <style.RedInput type="text" onChange={onChangeWriter} />  <br />
            제목: <input type="text" onChange={onChangeTitle} /> <br />
            내용: <input type="text" onChange={onChangeContents} /> <br />
            <style.BlueButton myColor={myColor} onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</style.BlueButton>
        </>
    );

};


export default BoardWriteUI;