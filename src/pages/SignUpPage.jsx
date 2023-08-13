import { useState, useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { IMaskInput } from "react-imask";
import AuthApi from "../services/AuthApi";
import Container from "../components/Container";
import Logo from "../components/Logo";

export default function SignUpPage() {

    const [name, setName] = useState("");
    let [cpf, setCpf] = useState("");
    let [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();

        if (password === confirmPassword){
            cpf = cpf.replace(/\D/g, ''); 
            phone = phone.replace(/\D/g, ''); 
            const promise = AuthApi.signup({name, cpf, phone, email, password});

            promise.then(res => {
                    alert(res.response.data);
                    navigate("/");
            });
                    
            promise.catch(res => {
                    alert(res.response.data);
            });
        }
        else {
            alert("Confirmação de senha está diferente!")
        }
        
    }

    return (
        <Container>
            <Logo />
            
            <form onSubmit={handleForm}>

                <input name="name" type="text" placeholder="nome" 
                    value={name} onChange={(e) => setName(e.target.value)} required />

                <IMaskInput name="cpf" mask="000.000.000-00" type="text" placeholder="cpf (apenas números)"  
                    value={cpf} onChange={(e) => setCpf(e.target.value)} required />

                <IMaskInput name="phone" mask="(00) 00000-0000" placeholder="celular (apenas números)"
                    value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <input name="email" type="email" placeholder="email"  
                    value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input name="password" placeholder="senha" type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} required />

                <input name="confirmpassword" placeholder="confirmar senha" type="password"
                    value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                <button type="submit"> Cadastrar </button>

            </form>

            <p> Já tem uma conta? </p>
            <Link to="/">
                Entre agora!
            </Link>
        </Container>
    )
}