import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .container {
        width: 95%;
        max-width: 960px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
