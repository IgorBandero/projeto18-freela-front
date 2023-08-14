import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`

    * {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    html {
        font-size: 18px;
    }

    input {
        width: calc(100% - 100px);
        max-width: 600px;  
        padding: 7px 10px;        
        font-size: 0.8rem;
        letter-spacing: 1.5px; 
        line-height: 0.5rem;    
        background-color: rgba(255,1255, 255, 0.6);   
        transition: background-color 0.5s ease;  
        border-radius: 10px;      
        border: 1px solid gray;
        outline: none;    
    }

    input:hover{
        background-color: rgba(255,255,255, 1);
    }

    input:focus {
        background-color: rgba(255,255,255, 1);
        outline: 1px solid black;
    }    

    .filled-input {
      background-color: rgba(255,255,255, 1);
    }

    button {     
        width: 165px; 
        padding: 10px;
        margin-top: 12px;
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1rem;
        color: white;
        background-color: rgba(133,182, 111, 0.5);  
        transition: background-color 0.3s ease;        
        border-radius: 10px;
        border: 1px solid gray;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
        outline: none;
        cursor: pointer;
    }

    button:hover{
        background-color: rgba(133,182, 111, 0.75);
    }

    button:focus{
        width: 160px;
        background-color: rgba(125,174, 103, 0.80);
        box-shadow: none;
        font-size: 0.8rem;
    }
    
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;        
        gap: 15px;        
    }

    a {      
        text-decoration: none;
        color: rgb(34, 72, 80);
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5rem;
    }

    a:hover{
        text-decoration: underline; 
    }

    .homeLogo {
        max-width: 130px;
        min-width: 100px;
        margin-bottom: 0;
        margin-top: 0;
    }

    .signUpLogo {
        width: 5vw;
        min-width: 135px;
        margin-bottom: 4vh;
    }

`

export default GlobalCSS;