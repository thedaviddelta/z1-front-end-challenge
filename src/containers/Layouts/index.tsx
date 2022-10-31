import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';

const PageLayout = dynamic(
  () => import('$/components/PageLayout').then((mod) => mod.PageLayout),
  { ssr: false },
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <PageLayout>{children}</PageLayout>
);
