import { FC } from 'react';

import { PlayerProps } from './types';

export const Player: FC<PlayerProps> = ({ className }) => (
  <div className={className} />
);
