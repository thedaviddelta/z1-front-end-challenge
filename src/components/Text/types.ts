import { Colors } from '$/styles/themes/theme';
import { typography } from '$/styles/themes/typography';
import { ReactNode } from 'react';

export type TVariants = keyof typeof typography;

export type TextProps = {
  children: ReactNode;
  tag: keyof JSX.IntrinsicElements;
  variant: TVariants;
  className?: string;
  color?: Colors;
};

export type $StyledProps = {
  $variant: TextProps['variant'];
  $color: TextProps['color'];
};
