import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import { FavsProvider } from '$/contexts/favs';
import { QueueProvider } from '$/contexts/queue';
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
        <QueueProvider>
          <FavsProvider>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FavsProvider>
        </QueueProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
