import HeartFillIcon from '$/assets/icons/heart-fill.svg';
import HeartLineIcon from '$/assets/icons/heart-line.svg';
import { FC } from 'react';

import { Container } from './styles';
import { FavButtonProps } from './types';

export const FavButton: FC<FavButtonProps> = ({ className }) => (
  <Container className={className} onClick={() => console.log('Favs!')}>
    <HeartLineIcon aria-label="Fav" />
  </Container>
);
