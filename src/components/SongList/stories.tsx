import { SortKey } from '$/globals/enums/sortKey';
import type { Meta, Story } from '@storybook/react';

import { SongList } from '.';
import { SongListProps } from './types';

export default {
  component: SongList,
  title: 'Layout/SongList',
  args: {
    query: '',
    sortKey: SortKey.NAME,
  },
} as Meta<SongListProps>;

const Template: Story<SongListProps> = (args) => <SongList {...args} />;

export const Default = Template.bind({});
