import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1290px) {
            font-size: 80%;
        }
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #fffade;
            border-radius: 1rem;
        }
        &::-webkit-scrollbar-track {
            background: #353535;
        }
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
    }

    button {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #fffade;
        background: transparent;
        transition: all 0.5s ease;
        color: white;
        &:hover{
            background-color: #fffade;
            color: white;
        }
    }

    h2 {
        font-weight:lighter;
        font-size: 3.5rem;
    }

    h3{
        color: white;
    }

    h4 {
        font-size: 1.5rem;
    }

    span {
        font-weight: bold;
        color: #fffade;
    }

    a {
        font-size: 1.1rem;
    }

    p {
        padding: 3rem;
        color: #ccc;
        font-size: 1.1rem;
        line-height: 150%;
    }
        
`;

export default GlobalStyle;
