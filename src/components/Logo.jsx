import styled from "styled-components";
import LogoMeCansei from "../assets/logo.png";

export default function Logo(props){
    return (
        <LogoImg src={LogoMeCansei} className={props.type} />
    )    
}

const LogoImg = styled.img`
    width: 20vw;
    max-width: 250px;
    min-width: 180px;
    margin-bottom: 5vh;
    margin-top: 30px;
    cursor: pointer;
`