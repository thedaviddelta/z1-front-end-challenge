import { typography } from '$/styles/themes/typography';
import styled, { css } from 'styled-components';

import { $StyledProps } from './types';

export const Container = styled.p<$StyledProps>`
  font-weight: ${({ theme }) => theme.weight.regular};
  ${({ theme, $color }) =>
    $color &&
    css`
      color: ${theme.color[$color]};
    `}
  ${({ $variant }) => typography[$variant]}
`;
