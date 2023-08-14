import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import ProductsApi from "../services/ProductsApi";
import styled from "styled-components";
import Logo from "../components/Logo";
import CardProduct from "../components/CardProduct";

export default function ProductPage(){    

    const { id } = useParams();
    const [product, setProduct] = useState({id:'',
    name:'',price:'',image:'',category:'',description:'',
    sellerName:'', phone:'', email:''});

    const navigate = useNavigate();

    const prod = {
        id: 1,
        name: "Teste",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.png/310px-SNES-Mod1-Console-Set.png",
        price: "1200.00",
        category: "eletrônicos",
        description: "o Super Nintendo Entertainment System (Super NES, SNES ou Super Nintendo) é um console de videogame de 16 bits desenvolvido pela Nintendo que foi lançado em 1990 no Japão.",
        sellerName: "Igor",
        phone: "48 99999-9999",
        email: "igorbandero@gmail.com"
    }
    
    useEffect(() => {
        const promise = ProductsApi.getProduct(id);
        promise.then(res => {
            setProduct(res.data);
        });
        promise.catch(error => {console.log(error.response.data);})},[]);

    return (
    
        <ContainerHome>
            <Header>
                <Logo />                
            </Header>
            <Main>
                <div className="productContainer">  
                    <CardProduct  id={product.id} name={product.name} 
                                  image={product.image} price={product.price}  
                                  category = {product.category} description = {product.description} 
                                  sellerName = {product.sellerName} phone = {product.phone}
                                  email = {product.email} />     
                </div>
            </Main>
            <Footer> 
                <button onClick={() => navigate("/novoproduto")} title="Novo produto para venda"> Anunciar </button>
                <button onClick={() => navigate("/meusprodutos")} title="Meus produtos anunciados"> Anúncios </button>
            </Footer>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`    
    height: 100%;
    min-height: 100vh;
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
    background-color: rgba(255, 255, 255, 0.5);

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

`
const Main = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: flex-start; 
    flex-wrap: wrap;   

    .productContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 90%;
    }
`