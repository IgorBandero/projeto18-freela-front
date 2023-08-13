import { useNavigate, Link } from "react-router-dom";
import { useState, useContext} from "react";
import AuthApi from "../services/AuthApi";
import Context from "../contexts/Context";
import styled from "styled-components";
import LogoMeCansei from "../assets/logo.png";

export default function SignInPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const {setToken} = useContext(Context); 
    const navigate = useNavigate();

    function handleLogin(e) {

        e.preventDefault();        
        const promise = AuthApi.signin({email,password});

        promise.then(res => {
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                navigate("/home");
        });
                
        promise.catch(res => {
                alert(res.response.data.message);
        });
    }

    return (
        <Container>
            <Logo src={LogoMeCansei} />
            <form onSubmit={handleLogin}>
                <input placeholder="email" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                <input placeholder="senha" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />                
                <button type="submit" > Entrar </button>
            </form>            
            <p> Não tem uma conta? </p>
            <Link to="/cadastro">
                Cadastre-se!
            </Link>
        </Container>
    )
}

const Container = styled.section`
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgb(85, 182, 201) 0%,
        rgb(255, 158, 176) 100% );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-top: 25px;
        font-size: 0.9rem;
        color: rgba(0,0,0,0.7);
        line-height: 1.2rem;
    }
`

const Logo = styled.img`
    width: 20vw;
    max-width: 400px;
    min-width: 275px;
    margin-bottom: 30px;
`