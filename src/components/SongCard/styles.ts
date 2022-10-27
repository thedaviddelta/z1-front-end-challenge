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

export const PlayButton = styled.button`
  block-size: 2rem;
  inline-size: 2rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 50%;
  cursor: pointer;

  & > svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const GenreText = styled(Text)`
  background-color: ${({ theme }) => theme.color.malibu50};
  padding: 0.25rem 0.5rem;
  border-radius: 3rem;
`;

export const FavButton = styled.button`
  justify-self: end;
  border: none;
  background: none;
  cursor: pointer;

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
