import { Text } from '$/components/Text';
import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  gap: 2rem;
`;

export const ErrorText = styled(Text).attrs({
  tag: 'p',
  variant: 'bodyBold',
  color: 'white',
})`
  background-color: ${({ theme }) => theme.color.kaihong700};
  width: fit-content;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  /* also center the icon */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const spin = keyframes`
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
`;

export const LoadingSpinner = styled.div`
  border: 0.75rem solid ${({ theme }) => theme.color.grayscale100};
  border-top-color: ${({ theme }) => theme.color.malibu500};
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  animation: ${spin} 2s linear infinite;
  margin: 0 auto;
`;
