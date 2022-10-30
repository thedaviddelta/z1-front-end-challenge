import HeartFillIcon from '$/assets/icons/heart-fill.svg';
import HeartLineIcon from '$/assets/icons/heart-line.svg';
import { IconButton } from '$/components/IconButton';
import { useFavs } from '$/contexts/favs';
import { FC } from 'react';

import { FavButtonProps } from './types';

export const FavButton: FC<FavButtonProps> = ({ className, songId }) => {
  const { isFaved, toggleFav } = useFavs(songId);

  return (
    <IconButton
      icon={isFaved ? HeartFillIcon : HeartLineIcon}
      label={isFaved ? 'Unfav' : 'Fav'}
      size={24}
      className={className}
      onClick={toggleFav}
      disabled={!songId}
    />
  );
};
