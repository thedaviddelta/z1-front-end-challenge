import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import { PagePropsWithApollo, useApolloClient } from '$/graphql/apollo-client';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApolloClient(pageProps as PagePropsWithApollo);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
