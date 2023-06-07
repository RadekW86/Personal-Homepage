import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme, mode }) => theme[mode].backgroundColor};
    transition: 0.2s ease-out;
};
`;
