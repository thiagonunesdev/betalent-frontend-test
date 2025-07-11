import { render, screen } from '@testing-library/react';

import LoadingTable from './LoadingTable';

describe('LoadingTable Component', () => {
  test('renders without crashing', () => {
    render(
      <table>
        <tbody>
          <LoadingTable />
        </tbody>
      </table>
    );
  });

  test('renders with default colSpan', () => {
    render(
      <table>
        <tbody>
          <LoadingTable />
        </tbody>
      </table>
    );
    const td = screen.getByRole('cell');
    expect(td).toHaveAttribute('colspan', '5');
  });

  test('renders with custom colSpan', () => {
    render(
      <table>
        <tbody>
          <LoadingTable colSpan={8} />
        </tbody>
      </table>
    );
    const td = screen.getByRole('cell');
    expect(td).toHaveAttribute('colspan', '8');
  });

  test('renders SpinnerWrapper and Spinner elements', () => {
    render(
      <table>
        <tbody>
          <LoadingTable />
        </tbody>
      </table>
    );

    const spinnerWrapper = screen.getByTestId('spinner-wrapper');
    const spinner = screen.getByTestId('spinner');

    expect(spinnerWrapper).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
