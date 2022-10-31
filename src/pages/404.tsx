import { CustomError } from '$/components/CustomError';
import { NextPage } from 'next';

const My404: NextPage = () => (
  <CustomError statusCode={404} statusText="This page could not be found" />
);

export default My404;
