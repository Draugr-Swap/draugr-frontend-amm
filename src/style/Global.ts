import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Norse;
    src: url(/fonts/Norse.otf);
  }
  * {
    font-family: Norse;
    color: white !important;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
