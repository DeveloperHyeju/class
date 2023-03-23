import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard ($number: Int) {
        fetchBoard (number: $number) {
            writer
            title
            contents
        }
    }
`;

const StaticRoutedPage1 = () => {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.boardNum)
        }
    });


    const onClickMoveToEditPage = () => {
        router.push(`/09-01-boards/${router.query.boardNum}/edit`);
    };

  
    return(
        <div>
            {router.query.boardNum}번 게시글로 이동이 완료되었습니다.
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={onClickMoveToEditPage}>수정하기</button>
        </div>
    );

};


export default StaticRoutedPage1;