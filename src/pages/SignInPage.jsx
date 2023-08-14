import { useNavigate, Link } from "react-router-dom";
import { useState, useContext} from "react";
import AuthApi from "../services/AuthApi";
import Context from "../contexts/Context";
import Container from "../components/Container";
import Logo from "../components/Logo";

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
                navigate("/home");
        });
                
        promise.catch(res => {
                alert(res.response.data);
        });
    }

    return (
        <Container>
            <Logo />
            <form onSubmit={handleLogin}>
                <input placeholder="email" type="text" value={email}
                    onChange={(e) => setEmail(e.target.value.trim())} required />
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

