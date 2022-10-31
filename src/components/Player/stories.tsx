import type { Meta, Story } from '@storybook/react';

import { Player } from '.';
import { PlayerProps } from './types';

export default {
  component: Player,
  title: 'Layout/Player',
} as Meta<PlayerProps>;

const Template: Story<PlayerProps> = (args) => <Player {...args} />;

export const Default = Template.bind({});
