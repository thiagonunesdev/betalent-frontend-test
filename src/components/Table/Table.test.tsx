import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Table from './Table';
import type { Column } from './Table.types';

// Mock loading component
vi.mock('./components/LoadingTable', () => ({
  default: ({ colSpan }: { colSpan: number }) => (
    <tr data-testid="loading-row">
      <td colSpan={colSpan}>Loading...</td>
    </tr>
  )
}));

type TestData = { id: number; name: string; job: string };

const columns: Column<TestData>[] = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Job', accessor: 'job' }
];

const data: TestData[] = [
  { id: 1, name: 'Alice', job: 'Developer' },
  { id: 2, name: 'Thiago', job: 'Designer' }
];

describe('Table component', () => {
  it('renders table headers based on columns', () => {
    render(<Table columns={columns} data={[]} />);
    columns.forEach((col) => {
      expect(screen.getByText(col.header)).toBeInTheDocument();
    });
  });

  it('renders rows and cells based on data', () => {
    render(<Table columns={columns} data={data} />);
    data.forEach((row) => {
      expect(screen.getByText(String(row.id))).toBeInTheDocument();
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.job)).toBeInTheDocument();
    });
  });

  it('renders LoadingTable when isLoading is true', () => {
    render(<Table columns={columns} data={data} isLoading />);
    expect(screen.getByTestId('loading-row')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders custom render function in columns', () => {
    const customColumns: Column<TestData>[] = [
      {
        header: 'Name',
        accessor: 'name',
        render: (value: string | number) => (
          <span data-testid="custom-render">{String(value).toUpperCase()}</span>
        )
      }
    ];
    const customData = [{ id: 1, name: 'Alice', job: 'Dev' }];
    render(<Table columns={customColumns} data={customData} />);
    expect(screen.getByTestId('custom-render')).toHaveTextContent('ALICE');
  });
});
