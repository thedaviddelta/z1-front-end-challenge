import type { Meta, Story } from '@storybook/react';

import { CustomError } from '.';
import { CustomErrorProps } from './types';

export default {
  component: CustomError,
  title: 'Layout/CustomError',
  args: {
    statusCode: 404,
    statusText: 'This page could not be found',
  },
} as Meta<CustomErrorProps>;

const Template: Story<CustomErrorProps> = (args) => <CustomError {...args} />;

export const Default = Template.bind({});
