import styled, { createGlobalStyle } from 'styled-components';

export const ApplicationLayout = styled.div``;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'VAG World';
    font-display: swap;
    src: url('/vag-world-bold.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html {
    font-size: 30px;
  }

  body {
    position: relative;
    display: flex;   
    justify-content: center; 
    background-color: #202432;
    font-family: 'VAG World';
  }

  @media (max-width: 450px), (max-height: 950px) {
    html {
      font-size: 18px;
    }
  }

`;