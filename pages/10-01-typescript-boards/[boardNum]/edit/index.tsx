import BoardWrite from "@/src/components/units/board/10-write/BoardWrite.container";
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


const GraphqlMutationPage = () => {

    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.boardNum)
        }
    });

    return <BoardWrite isEdit={true} data={data} />;

};


export default GraphqlMutationPage;