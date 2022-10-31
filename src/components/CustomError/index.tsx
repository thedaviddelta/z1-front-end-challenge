import ErrorFillIcon from '$/assets/icons/error-fill.svg';
import { CustomHead } from '$/components/CustomHead';
import { Text } from '$/components/Text';
import { FC } from 'react';

import { Container, IconWrapper } from './styles';
import { CustomErrorProps } from './types';

export const CustomError: FC<CustomErrorProps> = ({
  statusCode,
  statusText,
}) => (
  <Container>
    <CustomHead customTitle={`${statusCode} - ${statusText}`} />

    <IconWrapper>
      <ErrorFillIcon />
    </IconWrapper>

    <Text tag="h1" variant="title1" color="kaihong700">
      {statusCode}
    </Text>
    <Text tag="h2" variant="title2" color="kaihong700">
      {statusText}
    </Text>
  </Container>
);
