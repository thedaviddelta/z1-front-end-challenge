import { Player as DefaultPlayer } from '$/components/Player';
import { SideMenu as DefaultSideMenu } from '$/components/SideMenu';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid:
    'aside' auto
    'main' 1fr
    'player' auto
    / auto;

  ${from.tabletLandscape} {
    grid:
      'aside main' 1fr
      'player player' auto
      / auto 1fr;
  }
`;

export const SideMenuWrapper = styled.aside`
  grid-area: aside;
  background-color: ${({ theme }) => theme.color.grayscale50};

  ${from.tabletLandscape} {
    margin-block-end: -2rem; /* overflow over the player */
  }
`;

export const SideMenu = styled(DefaultSideMenu)`
  display: flex;
  align-items: center;
  height: 4.5rem;

  ${from.tabletLandscape} {
    position: sticky;
    top: 0;
    flex-direction: column;
    align-items: revert;
    width: 15rem;
    height: revert;
  }
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: 2.5rem;

  ${from.tabletLandscape} {
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
