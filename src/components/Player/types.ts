import { HTMLAttributes, SyntheticEvent } from 'react';

export type PlayerProps = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export type HorizontalStackProps = {
  $gap: number;
};

export type AudioEvent = SyntheticEvent<HTMLAudioElement> & {
  target: HTMLAudioElement;
};
