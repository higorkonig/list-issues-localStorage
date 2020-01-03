import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #84e;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #444;
    font-size: 14px;
    font-family: monospace, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
