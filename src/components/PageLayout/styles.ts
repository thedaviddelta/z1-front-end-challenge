import { Player as DefaultPlayer } from '$/components/Player';
import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid:
    'aside main' 1fr
    'player player' auto
    / auto 1fr;
`;

export const SideMenuWrapper = styled.aside`
  grid-area: aside;
  background-color: ${({ theme }) => theme.color.grayscale50};
  margin-block-end: -2rem;
`;

export const SideMenu = styled(DefaultSideMenu)`
  position: sticky;
  top: 0;
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;

  ${from['tabletLandscape']} {
    padding-inline: 6rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 64rem;
`;

export const Player = styled(DefaultPlayer)`
  grid-area: player;
  position: sticky;
  bottom: 0;
`;
