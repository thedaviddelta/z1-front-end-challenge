import { Children, ReactElement, ReactNode } from 'react';

import { LogicProps } from './types';

export function getLogic({ value, children }: LogicProps) {
  const childArray = Children.toArray(
    children,
  ) as ReactElement<HTMLOptionElement>[];

  const selectedChild = childArray.find((child) => child.props.value === value);
  const displayedValue = selectedChild?.props?.children as ReactNode;

  return {
    displayedValue,
  };
}
