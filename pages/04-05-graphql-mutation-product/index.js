import { useMutation, gql } from "@apollo/client";
import { useState } from "react";


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`

const GraphqlMutationPage = () => {
    
    
    const [ graphqlFunction ] = useMutation(CREATE_PRODUCT);


    const onClickSubmit = async () => {
        const result = await graphqlFunction({
            variables: {
                seller: "토토로",
                createProductInput: {
                    name: "도토리",
                    detail: "흠집 없습니다.",
                    price: 3000,
                }
            }
        });
        console.log(result);
        alert(result.data.createProduct.message); 
    };



    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );

};


export default GraphqlMutationPage;