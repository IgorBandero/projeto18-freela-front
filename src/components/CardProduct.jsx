import styled from "styled-components";

export default function CardProduct(props){

    return <ProductCard>
                <div className="prodData"> 
                    <img title="Ver detalhes do anúncio" alt="Foto do produto anunciado" src={props.image} ></img>
                    <h3>{props.name}</h3>
                    <p>R${props.price.toString().replace(".", ",")}</p>
                    <p>Categoria: {props.category}</p>
                    <p>Descrição: {props.description}</p>
                    <h3> Dados do vendedor: </h3>
                    <p>Nome: {props.sellerName}</p>
                    <p>Telefone: {props.phone}</p>
                    <p>E-mail: {props.email}</p>
                </div>        
            </ProductCard>
}

const ProductCard = styled.div`
    width: 300px;
    height: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;       
    text-align: center;
    margin: 15px;
    padding: 0 20px;
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
        align-items: center;
        height: 80%;
    }

    & > .prodData > h3 {
        font-weight: 700;
        font-size: 0.7rem;
        margin-top: 5px;
    }

    & > .prodData > p {
        font-size: 0.9rem;
        margin-top: 10px;
    }

    & > .prodData > img {
        max-width: 100px;
        max-height: 100px;
        margin-bottom: 5px;
        margin-top: 0;
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