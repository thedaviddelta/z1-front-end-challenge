import { SortKey } from '$/globals/enums/sortKey';
import type { Meta, Story } from '@storybook/react';

import { Select } from '.';
import { SelectProps } from './types';

export default {
  component: Select,
  title: 'Core/Select',
  args: {
    label: 'Sort by',
    value: SortKey.NAME,
    onChange: () => {},
  },
} as Meta<SelectProps>;

const Template: Story<SelectProps> = (args) => (
  <Select {...args}>
    {Object.entries(SortKey).map(([key, value]) => (
      <option value={value} key={value}>
        by {key.toLocaleLowerCase()}
      </option>
    ))}
  </Select>
);

export const Default = Template.bind({});
