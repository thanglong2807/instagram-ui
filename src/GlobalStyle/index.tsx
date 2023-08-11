import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Nexa;
  src: url("../fonts/Nexa-ExtraLight.ttf");
}
  /* CSS Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    
    font-family: sans-serif;
  }
  button{
    border: none;
    background: bottom;
  }
  input{
    border: none;
    outline: none;
  }
  .container{
    max-width: 1200px ;
    margin: 0 auto;
  }
  span{
    display: inline-block;
  }
  a{
    text-decoration: none;
  }
  .cursor{
    cursor: pointer;
  }
`;

export default GlobalStyle;
