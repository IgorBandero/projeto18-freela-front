import { useNavigate, Link } from "react-router-dom";
import { useState, useContext, useEffect} from "react";
import ProductsApi from "../services/ProductsApi";
import styled from "styled-components";
import Logo from "../components/Logo";
import CardProductUser from "../components/CardProductUser";
import Context from "../contexts/Context";

export default function MyProductsPage(){    

    const { token } = useContext(Context); 
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        const promise = ProductsApi.getUserProducts(token);
        promise.then(res => {
            setProducts(res.data);})
        promise.catch(res => {console.log(res.response.data);})},[]);

    return (
    
        <ContainerHome>
            <Header>
                <Logo />                
            </Header>
            <Main>
                <div className="productsContainer">  
                    {products.map((product, index) => (
                        <CardProductUser key={index} id={product.id} name={product.name} 
                              image={product.image} price={product.price} 
                              category={product.category} description={product.description} 
                              sold={product.sold} />
                    ))}     
                </div>
            </Main>
            <Footer> 
                <button onClick={() => navigate("/home")} title="Voltar para a página inicial"> Voltar </button>
                <button onClick={() => navigate("/novoproduto")} title="Novo produto para venda"> Anunciar </button>
            </Footer>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`    
    height: 100%;
    min-height: 100vh;
    padding-bottom: 150px;
    background: linear-gradient(
        180deg,
        rgb(85, 182, 201) 0%,
        rgb(255, 158, 176) 100% );
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 13vh;
    background-color: rgba(255, 255, 255, 1);

    & > button {
        width: 120px; 
        margin-left: 15px;
        margin-right: 15px;
        padding: 15px;
        font-size: 0.9rem;
        margin-top: 0;
        background-color: rgba(133,182, 111, 0.5);   
    }

    & > button:hover {
        background-color: rgba(133,182, 111, 0.9);   
    }

    & > button:focus{
        width: 115px;
        background-color: rgba(125,174, 103, 0.80);
        box-shadow: none;
        font-size: 0.8rem;
    }

`
const Main = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: flex-start; 
    flex-wrap: wrap;   

    .productsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
    }
`