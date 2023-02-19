import { useState } from "react";



const SignupPage = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState('');

    const onChangeEmailInput = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    const onChangePasswordInput = (e) => {
        const { value } = e.target;
        setPassword(value);
    };

    const onClickSignup = () => {
        console.log(email);
        console.log(password);

        if(email.includes('@') === false) {
            setEmailError('이메일 형식이 잘못되었습니다.');
        } else {
            // 메시지 알림 이전, Backend 컴퓨터에 있는 api(함수) 요청하기
            alert('회원가입을 축하합니다.');
        }
    };

    return (
        <div>
            이메일: <input type="text" value={email} onChange={onChangeEmailInput} />
            <div id="error">{emailError}</div>
            비밀번호: <input type="password" value={password} onChange={onChangePasswordInput} />
            <div id="errorPassword"></div>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    );

};


export default SignupPage;