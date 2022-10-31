import type { Meta, Story } from '@storybook/react';

import { FavButton } from '.';
import { FavButtonProps } from './types';

export default {
  component: FavButton,
  title: 'Extra/FavButton',
  args: {
    songId: 1,
  },
} as Meta<FavButtonProps>;

const Template: Story<FavButtonProps> = (args) => <FavButton {...args} />;

export const Default = Template.bind({});
