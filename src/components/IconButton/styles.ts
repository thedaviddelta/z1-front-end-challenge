import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.button<ContainerProps>`
  border: none;
  background: none;
  cursor: pointer;
  ${({ theme, $color }) => $color && `color: ${theme.color[$color]};`}

  & > svg {
    display: block;
    width: ${({ $size }) => $size / 16}rem;
    height: ${({ $size }) => $size / 16}rem;
  }
`;
