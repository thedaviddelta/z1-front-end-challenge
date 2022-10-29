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
  <Container $size={size} $color={color} {...props}>
    <Icon aria-label={label} />
  </Container>
);
