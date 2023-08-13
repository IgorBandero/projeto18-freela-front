import styled from "styled-components";
import LogoMeCansei from "../assets/logo.png";

export default function Logo(){
    return (
        <LogoImg src={LogoMeCansei} />
    )    
}

const LogoImg = styled.img`
    width: 20vw;
    max-width: 400px;
    min-width: 275px;
    margin-bottom: 30px;
`