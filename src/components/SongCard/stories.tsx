import type { Meta, Story } from '@storybook/react';

import { SongCard } from '.';
import { SongCardProps } from './types';

export default {
  component: SongCard,
  title: 'Extra/SongCard',
  args: {
    song: {
      id: 17,
      name: 'Allison Williams',
      author: {
        name: 'William Tran',
      },
      description:
        'Arrive number return group relate forget whatever. Successful put agreement clear prepare tax.\nFirst help really. Father evening indeed four however check learn music.',
      genre: 'BOUNCY_TECHNO',
      image:
        'https://images.unsplash.com/photo-1622977265115-cce36eb43f18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      audio: {
        url: 'https://d2s139ebbsksc4.cloudfront.net/Noel.mp3',
      },
    },
    songNames: [
      'Allison Williams',
      'Ann Raymond',
      'Casey Webb',
      'Donald Burke',
      'Donald Lyons',
      'Donna Jenkins',
      'Elizabeth Rivera',
      'Hannah Cooper',
      'James Eaton',
      'Jeffrey Graves',
      'Jennifer Aguilar',
      'Jennifer Wright',
      'John Evans',
      'Kimberly Lamb',
      'Nicholas Flynn',
      'Patty Davis',
      'Ronald Henderson',
      'Sean Stewart',
      'Shawn Flores',
      'Tammie Gonzalez',
    ],
  },
} as Meta<SongCardProps>;

const Template: Story<SongCardProps> = (args) => <SongCard {...args} />;

export const Default = Template.bind({});
