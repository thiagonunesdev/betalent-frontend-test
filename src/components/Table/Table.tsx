import LoadingTable from './components/LoadingTable';
import { TableWrapper, StyledTable, Thead, Th, Td, Tr } from './Table.style';
import type { TableProps } from './Table.types';

const Table = <T extends object>({
  columns,
  data,
  dataTestId = 'react-table',
  isLoading = false
}: TableProps<T>): React.ReactElement => {
  return (
    <TableWrapper data-testid={dataTestId}>
      <StyledTable>
        <Thead>
          <tr>
            {columns.map((col) => (
              <Th key={String(col.accessor)} align={col.align}>
                {col.header}
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {isLoading ? (
            <LoadingTable colSpan={columns.length} />
          ) : (
            data.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {columns.map((col) => (
                  <Td key={String(col.accessor)} align={col.align}>
                    {col.render ? col.render(row[col.accessor], row) : String(row[col.accessor])}
                  </Td>
                ))}
              </Tr>
            ))
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
