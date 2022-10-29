import { IconButton } from '$/components/IconButton';
import styled, { css } from 'styled-components';

import { HorizontalStackProps, TrackProgressInputProps } from './types';

export const Container = styled.div`
  display: grid;
  grid: auto-flow / 1fr auto 1fr;
  background-color: ${({ theme }) => theme.color.grayscale900};
  padding: 1rem 1.5rem;
  border-radius: 1rem 1rem 0 0;
`;

export const HorizontalStack = styled.div<HorizontalStackProps>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap / 16}rem;

  &:last-of-type {
    justify-self: end;
  }
`;

export const Image = styled.img`
  block-size: 3rem;
  inline-size: 3rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const PlayButton = styled(IconButton)`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
`;

const TrackProgressThumb = css`
  appearance: none;
  width: 0.625rem;
  height: 0.625rem;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  cursor: ew-resize;
`;

const TrackProgressTrack = css`
  width: 100%;
  height: 0.25rem;
  border-radius: 0.125rem;
  transition: background 0.25s ease;
`;

export const TrackProgressInput = styled.input<TrackProgressInputProps>`
  appearance: none;
  background: transparent;
  width: 16.75rem;

  /* have to be separated for all selectors to be valid */
  &::-moz-range-thumb {
    ${TrackProgressThumb}
  }
  &::-webkit-slider-thumb {
    ${TrackProgressThumb}
    margin-block-start: -2.5px;
  }

  &::-moz-range-track {
    ${TrackProgressTrack}
    background: ${({ theme }) => theme.color.grayscale700};
  }
  &::-moz-range-progress {
    background: ${({ theme }) => theme.color.malibu500};
  }
  &::-webkit-slider-runnable-track {
    ${TrackProgressTrack}
    background: linear-gradient(
      to right,
      ${({ theme, $progress }) => `
        ${theme.color.malibu500} ${$progress}%,
        ${theme.color.grayscale700} ${$progress}%
      `}
    );
  }
`;
