import { useRouter } from "next/router";



const StaticRoutingPage = () => {

    const router = useRouter();

    const onClickRounting1 = () => {
        router.push("/05-08-dynamic-routed-board-query/555");
    };

    const onClickRounting2 = () => {
        router.push("/05-08-dynamic-routed-board-query/2222");
    };

    const onClickRounting3 = () => {
        router.push("/05-08-dynamic-routed-board-query/999");
    };
    
    const onClickRounting4 = () => {
        router.push("/05-08-dynamic-routed-board-query/1111");
    };
  
    return(
        <>
            <button onClick={onClickRounting1}>555번 게시글로 이동하기</button> <br/>
            <button onClick={onClickRounting2}>2222번 게시글로 이동하기</button> <br/>
            <button onClick={onClickRounting3}>999번 게시글로 이동하기</button> <br/>
            <button onClick={onClickRounting4}>1111번 게시글로 이동하기</button> <br/>
        </>
    );

};


export default StaticRoutingPage;