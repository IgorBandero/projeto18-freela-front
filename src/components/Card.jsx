import styled from "styled-components";

export default function Card(props){

    return <ProductCard>
                <div className="prodData" onClick={() => props.showProduct(props.id)}> 
                    <img title="Ver detalhes do anúncio" alt="Foto do produto anunciado" src={props.image} ></img>
                    <h3>{props.name}</h3>
                    <p>R${props.price.toString().replace(".", ",")}</p>
                </div>        
            </ProductCard>
}

const ProductCard = styled.div`
    width: 160px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;       
    text-align: center;
    margin: 15px;
    padding: 15px;
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
        font-weight: 400;
        font-size: 15px;
        margin-top: 5px;
    }

    & > .prodData > p {
        font-size: 0.9rem;
        margin-top: 10px;
    }

    & > .prodData > img {
        max-width: 80px;
        max-height: 80px;
        margin-top: 5px;
        margin-bottom: 5px;
    }    

    @media (max-width: 430px) {
        width: 130px;
        height: 170px;
        margin: 15px;
        padding: 10px;

        & > .prodData > h3 {
            font-weight: 400;
            font-size: 13px;
        }

        & > .prodData > p {
            font-size: 0.7rem;
            margin-top: 5px;
        }  

        & > .prodData > img {
            max-width: 70px;
            max-height: 70px;
        }              
    }
`