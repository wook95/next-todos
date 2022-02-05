import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
