import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--dark-grey);
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  html {
    background: var(--background);
  }

  :root {
    --white: #FFFFFF;
    --dark-grey: #555555;
    --medium-dark-grey: #848484;
    --background: #F7F9FA;
    --box-shadow: #00000029;
    --grey: #DBDBDB;
    --blue: #4DA6B3;
    --green: #5DE290;
  }
`;
