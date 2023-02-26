import { useRouter } from "next/router";



const StaticRoutingPage = () => {

    const router = useRouter();

    const onClickRounting = () => {
        router.push("/05-02-static-routed");
    };
  
    return(
        <>
            <button onClick={onClickRounting}>페이지 이동하기</button>
        </>
    );

};


export default StaticRoutingPage;