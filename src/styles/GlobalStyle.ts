import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontGrey};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 14px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
