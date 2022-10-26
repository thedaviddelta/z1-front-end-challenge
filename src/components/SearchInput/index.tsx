import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({ className, ...props }: SearchInputProps) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input name="search" label="search" hideLabel={true} {...props} />
  </Container>
);
