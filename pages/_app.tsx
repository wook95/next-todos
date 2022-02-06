import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import CenteredContainer from '../components/CenteredContainer';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CenteredContainer>
          <Header />
          <Component {...pageProps} />
        </CenteredContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
