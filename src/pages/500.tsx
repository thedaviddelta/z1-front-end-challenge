import { CustomError } from '$/components/CustomError';
import { NextPage } from 'next';

const My500: NextPage = () => (
  <CustomError statusCode={500} statusText="Internal Server Error" />
);

export default My500;
