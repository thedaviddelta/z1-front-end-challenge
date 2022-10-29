import { PropsWithChildren, SelectHTMLAttributes } from 'react';

export type SelectProps = PropsWithChildren<{
  label: SelectHTMLAttributes<HTMLSelectElement>['aria-label'];
  value: SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: SelectHTMLAttributes<HTMLSelectElement>['onChange'];
}>;

export type LogicProps = Pick<SelectProps, 'value' | 'children'>;
