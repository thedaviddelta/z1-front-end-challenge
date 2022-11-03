import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  padding-block: 1.5rem 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${from.tabletLandscape} {
    padding-block: 2.5rem 6.3rem;
  }
`;

export const SearchInput = styled(DefaultSearchInput)``;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1.5rem;
`;
