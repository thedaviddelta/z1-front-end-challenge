import { CustomError } from '$/components/CustomError';

import { render, screen } from './test-utils';

it('renders status info correctly', () => {
  const statusCode = 404;
  const statusText = 'This page could not be found';
  render(<CustomError statusCode={statusCode} statusText={statusText} />);

  expect(screen.getByText(statusCode)).toBeInTheDocument();
  expect(screen.getByText(statusText)).toBeInTheDocument();
});
