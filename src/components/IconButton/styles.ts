import styled, { keyframes } from 'styled-components';

import { ContainerProps } from './types';

const expand = keyframes`
  from {
    transform: scale(0.85);
  }

  to {
    transform: scale(1.15);
  }
`;

export const Container = styled.button<ContainerProps>`
  border: none;
  background: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  ${({ theme, $color }) => $color && `color: ${theme.color[$color]};`}
  transition: color 0.33s ease-out;

  & > svg {
    display: block;
    width: ${({ $size }) => $size / 16}rem;
    height: ${({ $size }) => $size / 16}rem;
    animation: ${expand} 0.125s ease-out;
  }
`;
