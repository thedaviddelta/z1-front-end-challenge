import { IconButton } from '$/components/IconButton';
import { Text } from '$/components/Text';
import dynamic from 'next/dynamic';
import styled, { keyframes } from 'styled-components';

const DefaultFavButton = dynamic(
  () => import('$/components/FavButton').then((mod) => mod.FavButton),
  { ssr: false },
);

export const Container = styled.article`
  display: grid;
  grid: auto-flow / 8.75rem 37.5rem auto;
  gap: 1.25rem;
  align-items: center;
  padding: 0;
  inline-size: 64rem;
  min-block-size: 8.75rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  border-radius: 0.75rem;
`;

export const Image = styled.img`
  block-size: 100%;
  inline-size: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const randomSpring = keyframes`
  0%, 100% {
    height: 16%;
  }
  10% {
    height: 66%;
  }
  50% {
    height: 33%;
  }
  60% {
    height: 50%;
  }
  80% {
    height: 100%;
  }
`;

export const ImageAnimationWrapper = styled.div`
  position: absolute;
  inset: 0;
  block-size: 100%;
  inline-size: 100%;
  padding: 1.25rem;
  border-radius: inherit;
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
  background-color: hsl(0deg 100% 100% / 0.3); /* transparent white */
  pointer-events: none;
`;

export const ImageAnimationItem = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
  animation: ${randomSpring} 1s infinite backwards;

  /* aparently random flow */
  &:nth-of-type(1) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(4),
  &:nth-of-type(8) {
    animation-delay: 0.9s;
  }
  &:nth-of-type(5),
  &:nth-of-type(6) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(7) {
    animation-delay: 0.1s;
  }
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
