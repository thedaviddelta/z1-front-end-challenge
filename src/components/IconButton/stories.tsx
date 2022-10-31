import PlayFillIcon from '$/assets/icons/play-fill.svg';
import type { Meta, Story } from '@storybook/react';

import { IconButton } from '.';
import { IconButtonProps } from './types';

export default {
  component: IconButton,
  title: 'Core/IconButton',
  args: {
    icon: PlayFillIcon,
    label: 'Play',
    size: 24,
    color: 'grayscale900',
    onClick: () => {},
  },
} as Meta<IconButtonProps>;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
