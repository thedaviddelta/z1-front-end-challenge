import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid: auto-flow / repeat(2, auto);
  place-content: center;
  gap: 0 0.5rem;
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.color.kaihong900};
  grid-row: span 2;
  padding: 0.75rem;

  & > svg {
    display: block;
    width: auto;
    height: 100%;
    /* needed on gecko because of a bug */
    min-width: 3.5rem;
  }
`;
