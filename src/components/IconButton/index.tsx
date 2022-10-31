import { FC } from 'react';

import { Container } from './styles';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({
  icon: Icon,
  label,
  size,
  color,
  ...props
}) => (
  <Container aria-label={label} $size={size} $color={color} {...props}>
    <Icon />
  </Container>
);
