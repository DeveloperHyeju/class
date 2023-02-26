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
            number: Number(router.query.boardNumber)
        }
    });
  
    return(
        <div>
            {router.query.boardNumber}번 게시글로 이동이 완료되었습니다.
            <div>작성자: {data && data.fetchBoard.writer}</div>
            <div>제목: {data && data.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </div>
    );

};


export default StaticRoutedPage1;