import Head from 'next/head';
import { FC } from 'react';

import { CustomHeadProps } from './types';

const title = 'Z1';

export const CustomHead: FC<CustomHeadProps> = ({ customTitle }) => (
  <Head>
    <title>{customTitle ? `${title} | ${customTitle}` : title}</title>
    <meta
      name="description"
      content="We are a digital product studio focusing on driving ideas from inception to launch."
    />

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
  </Head>
);
