import type { ReactElement } from 'react';

import { SpinnerWrapper, Spinner } from './LoadingTable.style';

const DEFAULT_COLSPAN = 5;

const LoadingTable = ({ colSpan = DEFAULT_COLSPAN }: { colSpan?: number }): ReactElement => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <SpinnerWrapper data-testid="spinner-wrapper">
          <Spinner data-testid="spinner" />
        </SpinnerWrapper>
      </td>
    </tr>
  );
};

export default LoadingTable;
