import { Props as InputProps } from '$/components/Input/types';

export type SearchInputProps = Omit<InputProps, 'name' | 'label' | 'hideLabel'>;
