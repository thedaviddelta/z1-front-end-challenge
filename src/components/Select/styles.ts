import styled from 'styled-components';

/*
 * replace original select by creating a fake designable
 * version and covering its whole size with the actual one
 */

export const Container = styled.div`
  position: relative;
  width: max-content;
`;

export const SelectElement = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const FakeWrapper = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.grayscale50};
  color: ${({ theme }) => theme.color.grayscale800};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${SelectElement}:hover ~ & {
    color: ${({ theme }) => theme.color.black};
  }

  ${SelectElement}:focus ~ & {
    /* mimic outline browser defaults */
    outline: 2px solid;
    outline-color: -webkit-focus-ring-color;
    outline-color: Highlight;
  }

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
