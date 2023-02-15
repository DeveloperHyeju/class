import { Inner, Title, Row, Label, Input } from "@/styles/emotion";


const LoginPage = () => {

    return (
        <Inner>
            <Title>로그인</Title>
            <Row>
                <Label htmlFor="id">아이디</Label>
                <Input id="id" type="text" />
            </Row>
            <Row>
                <Label htmlFor="id">비밀번호</Label>
                <Input id="password" type="password" />
            </Row>
        </Inner>
    );

};

export default LoginPage;