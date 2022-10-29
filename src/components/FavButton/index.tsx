import HeartFillIcon from '$/assets/icons/heart-fill.svg';
import HeartLineIcon from '$/assets/icons/heart-line.svg';
import { IconButton } from '$/components/IconButton';
import { FC } from 'react';

import { FavButtonProps } from './types';

export const FavButton: FC<FavButtonProps> = ({ className }) => (
  <IconButton
    icon={HeartLineIcon}
    label="Fav"
    size={24}
    className={className}
    onClick={() => console.log('Favs!')}
  />
);
