import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }

    body {
      background-color: ${props => props.theme.color.backgroundBase};
      color: ${props => props.theme.color.textBase};
      font-size: 1rem;
      padding-left: 400px;
    }
`;
