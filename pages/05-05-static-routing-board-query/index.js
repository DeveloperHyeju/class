import { useRouter } from "next/router";



const StaticRoutingPage = () => {

    const router = useRouter();

    const onClickRounting1 = () => {
        router.push("/05-06-static-routed-board-query/1");
    };

    const onClickRounting2 = () => {
        router.push("/05-06-static-routed-board-query/2");
    };

    const onClickRounting3 = () => {
        router.push("/05-06-static-routed-board-query/3");
    };
  
    return(
        <>
            <button onClick={onClickRounting1}>1번 게시글로 이동하기</button> <br/>
            <button onClick={onClickRounting2}>2번 게시글로 이동하기</button> <br/>
            <button onClick={onClickRounting3}>3번 게시글로 이동하기</button> <br/>
        </>
    );

};


export default StaticRoutingPage;