import ChevronLineIcon from '$/assets/icons/chevron-line.svg';
import { FC } from 'react';

import { getLogic } from './logic';
import { Container, FakeWrapper, SelectElement } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  label,
  value,
  onChange,
  children,
}) => {
  const { displayedValue } = getLogic({ value, children });

  return (
    <Container>
      <SelectElement value={value} onChange={onChange} aria-label={label}>
        {children}
      </SelectElement>
      <FakeWrapper aria-hidden={true}>
        {label}: {displayedValue}
        <ChevronLineIcon />
      </FakeWrapper>
    </Container>
  );
};
