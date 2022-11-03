import { Container } from './styles';
import { SeparatorProps } from './types';

export const Separator = ({
  spaceBlockStart = '3rem',
  spaceBlockEnd = '3rem',
  isVertical = false,
  className,
}: SeparatorProps) => (
  <Container
    className={className}
    $spaceBlockStart={spaceBlockStart}
    $spaceBlockEnd={spaceBlockEnd}
    $isVertical={isVertical}
  />
);
