import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AuthProvider } from '../src/contexts/AuthContext'

const GlobalStyle = createGlobalStyle`
   /* Reset <CSS></CSS>*/
   *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100%;
  }

  body {
    font-family: sans-serif;    
  }
  
  #__next{
    display: flex;
    flex-flow: column;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
