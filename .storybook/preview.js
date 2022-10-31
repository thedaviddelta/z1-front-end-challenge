import { ApolloProvider } from '@apollo/client';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { FavsProvider } from '$/contexts/favs';
import { QueueProvider } from '$/contexts/queue';
import { useApolloClient } from '$/graphql/apollo-client';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';

const Wrapper = ({ children }) => {
  const client = useApolloClient({});

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <QueueProvider>
          <FavsProvider>
            <GlobalStyle />
            {children}
          </FavsProvider>
        </QueueProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
