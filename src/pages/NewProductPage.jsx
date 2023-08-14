import { useState, useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthApi from "../services/AuthApi";
import ProductsApi from "../services/ProductsApi";
import Context from "../contexts/Context";
import Container from "../components/Container";
import styled from "styled-components";
import Logo from "../components/Logo";

export default function NewProductPage() {    

    let [name, setName] = useState("");
    let [image, setImage] = useState("");
    let [category, setCategory] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    const { token } = useContext(Context); 

    const navigate = useNavigate();

    function handleForm(e){

        e.preventDefault();

        // Validar o token do usuário

        const product = { 
            name, 
            image, 
            category, 
            description, 
            price 
        }

        const promise = ProductsApi.newProduct(product, token);

        promise.then(res => {
            alert(res.data);
            navigate('/home');
        });
                
        promise.catch(res => {
            alert(res.response.data);
        });
    }

    return (
        <Container>
            <Logo type="signUpLogo" />

            <h1> Formulário de Anúncio </h1>
            
            <form onSubmit={handleForm} className="signUpForm">
               
                <input name="name" type="text" placeholder="nome" 
                    value={name} onChange={(e) => setName(e.target.value)} required />

                <input name="image" type="url" placeholder="link para imagem do produto" 
                    value={image} onChange={(e) => setImage(e.target.value)} required />

                <input name="category" type="text" placeholder="categoria do produto"  
                    value={category} onChange={(e) => setCategory(e.target.value)} required />

                <input name="description" placeholder="descrição do produto" type="text"
                    value={description} onChange={(e) => setDescription(e.target.value)} required />

                <input name="price" placeholder="Preço do produto (apenas números, ex: 99,50)" type="text"
                    value = {price} onChange={(e) => setPrice(e.target.value)} required />

                <button type="submit"> Cadastrar </button>          

            </form>

            <Footer> 
                <button onClick={() => navigate("/home")} title="Cancelar a criação do anúncio"> Cancelar </button>
                <button onClick={() => navigate("/meusprodutos")} title="Meus produtos anunciados"> Anúncios </button>
            </Footer>

        </Container>
    )

}

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

    & > button:focus{
        width: 115px;
        background-color: rgba(125,174, 103, 0.80);
        box-shadow: none;
        font-size: 0.8rem;
    }

`