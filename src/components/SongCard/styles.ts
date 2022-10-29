import { FavButton as DefaultFavButton } from '$/components/FavButton';
import { IconButton } from '$/components/IconButton';
import { Text } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.article`
  display: grid;
  grid: auto-flow / 8.75rem 37.5rem auto;
  gap: 1.25rem;
  align-items: center;
  padding: 0;
  inline-size: 64rem;
  min-block-size: 8.75rem;
`;

export const Image = styled.img`
  block-size: 100%;
  inline-size: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ExtraWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-block-start: 0.5rem;
`;

export const PlayButton = styled(IconButton)`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 50%;
`;

export const GenreText = styled(Text)`
  background-color: ${({ theme }) => theme.color.malibu50};
  padding: 0.25rem 0.5rem;
  border-radius: 3rem;
`;

export const FavButton = styled(DefaultFavButton)`
  justify-self: end;
`;
