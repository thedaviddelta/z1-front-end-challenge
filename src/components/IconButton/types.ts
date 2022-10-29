import { Colors } from '$/styles/themes/theme';
import { ButtonHTMLAttributes, FC, SVGAttributes } from 'react';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: FC<SVGAttributes<SVGElement>>;
  label: string;
  size: number;
  color?: Colors;
};

export type ContainerProps = {
  $size: IconButtonProps['size'];
  $color: IconButtonProps['color'];
};
