import { FavsProvider } from '$/contexts/favs';
import { QueueProvider } from '$/contexts/queue';
import theme from '$/styles/themes';
import { MockedProvider } from '@apollo/client/testing';
import { render, RenderOptions } from '@testing-library/react';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import apolloMocks from './mocks/apollo';
import { RouterProviderMock } from './mocks/next';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <RouterProviderMock>
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        <QueueProvider>
          <FavsProvider>{children}</FavsProvider>
        </QueueProvider>
      </MockedProvider>
    </ThemeProvider>
  </RouterProviderMock>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(ui, {
    ...options,
    wrapper: !options?.wrapper
      ? Providers
      : ({ children }) => (
          <Providers>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <options.wrapper>{children}</options.wrapper>
          </Providers>
        ),
  });

/* eslint-disable import/export */
export * from '@testing-library/react';
export { customRender as render };
