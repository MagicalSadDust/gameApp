import styled, { createGlobalStyle } from 'styled-components';

export const ApplicationLayout = styled.div``;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'VAG World';
    font-display: swap;
    src: url('../../public/vag-world-bold.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    display: flex;   
    justify-content: center; 
    background-color: #202432;
    font-family: 'VAG World';
  }

`;