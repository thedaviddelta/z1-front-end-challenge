import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import styled from 'styled-components';

export const Container = styled.div`
  padding-block: 2.5rem 6.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SearchInput = styled(DefaultSearchInput)``;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1.5rem;
`;
