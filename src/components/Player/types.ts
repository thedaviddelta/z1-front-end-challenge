import { HTMLAttributes } from 'react';

export type PlayerProps = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export type HorizontalStackProps = {
  $gap: number;
};

export type TrackProgressInputProps = {
  $progress: number;
};
