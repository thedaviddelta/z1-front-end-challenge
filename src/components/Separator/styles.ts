import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  writing-mode: ${({ $isVertical }) =>
    $isVertical ? 'vertical-rl' : 'horizontal-tb'};

  inline-size: 100%;
  block-size: 1.5rem;

  background-image: radial-gradient(
    ${({ theme }) => theme.color.grayscale200} 1px,
    transparent 1px
  );
  background-repeat: ${({ $isVertical }) =>
    $isVertical ? 'repeat-y' : 'repeat-x'};
  background-position: -4px 50%;
  background-size: 1rem 1rem;
  margin-block-start: ${({ $spaceBlockStart }) => $spaceBlockStart};
  margin-block-end: ${({ $spaceBlockEnd }) => $spaceBlockEnd};
`;
