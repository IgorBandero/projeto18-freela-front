import styled from "styled-components";

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

export default Container;