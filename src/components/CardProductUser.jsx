import styled from "styled-components";
import ProductsApi from "../services/ProductsApi";
import { useState } from "react";

export default function CardProductUser(props){

    const [isChecked, setIsChecked] = useState(props.sold);

    function handleCheckboxChange(e) {
        setIsChecked(!isChecked);
        const promise = ProductsApi.deleteProduct(props.id, token);
        promise.then(res => {
            alert("Status de venda atualizado!");})
        promise.catch(res => {console.log(res.response.data);})       
    };
    
    return <ProductCard>
                <div className="prodData"> 
                    <img title="Ver detalhes do anúncio" alt="Foto do produto anunciado" src={props.image} ></img>
                    <h3>{props.name}</h3>
                    <p>R${props.price.toString().replace(".", ",")}</p>
                    <p>Categoria: {props.category}</p>
                    <p>Descrição: {props.description}</p>
                    <label for="soldCheck">
                        <input label="Marcar como vendido" type="checkbox" checked={isChecked} 
                        onChange={handleCheckboxChange} id="soldCheck"/>
                        <p> Marcar como vendido </p>
                    </label>
                    
                </div>        
            </ProductCard>
}

const ProductCard = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;    
    margin: 15px;
    padding: 25px 25px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
    font-family: "Roboto", sans-serif;
    font-weight: 300;    
    border-radius: 10px;
    line-height: 20px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.75);
        
    }

    & > .prodData {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 80%;
    }

    & > .prodData > h3 {
        font-weight: 700;
        margin-top: 5px;
    }

    & > .prodData > p {
        font-size: 0.9rem;
        margin-top: 10px;
    }

    & > .prodData > img {
        max-width: 120px;
        max-height: 120px;
        margin-bottom: 5px;
        margin-top: 0;
    }    

    & > .prodData > label {
        display: flex;
        margin-left: 0;
        margin-top: 15px;
        text-align: left;
        font-size: 0.7rem;
        font-weight: 700;
        outline: none;
    } 

    & > .prodData > label > p {
        margin-left: 5px;
    } 
    
    & > .prodData > label > input {
        width: fit-content;
        outline: none;
    } 

    @media (max-width: 430px) {
        width: 300px;
        height: 430px;

        & > .prodData > h3 {
            font-weight: 700;
            font-size: 0.7rem;
        }

        & > .prodData > p {
            font-size: 0.7rem;
            margin-top: 5px;
        }  

        & > .prodData > img {
            max-width: 90px;
            max-height: 90px;
        }              
    }
`