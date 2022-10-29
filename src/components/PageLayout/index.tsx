import React from 'react';

import {
  Container,
  ContentWrapper,
  Main,
  Player,
  SideMenu,
  SideMenuWrapper,
} from './styles';
import { PageLayoutProps } from './types';

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Container>
    <SideMenuWrapper>
      <SideMenu />
    </SideMenuWrapper>
    <Main>
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
    <Player />
  </Container>
);
