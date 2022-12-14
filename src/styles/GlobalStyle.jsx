import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Public Sans', sans-serif;
        font-size: 16px;
        color: #000000;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;