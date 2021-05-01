import GlobalStyle from '../styles/config/global'

export default function App({ Component, pageProps }){
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
