import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  html{
    box-sizing: border-box;
  }
  *, *::after, *::before{
    box-sizing: inherit;
  }
  body { 
    font-family: 'Montserrat', sans-serif;
  }
  a,button{
    font-family: 'Montserrat', sans-serif;
  }
  `;

export default GlobalStyles;
