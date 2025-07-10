import type { JSX } from 'react'
import { TableWrapper, StyledTable, Thead, Th, Td, Tr } from './Table.style'
import type { TableProps } from './Table.types'

const Table = <T extends object>({ columns, data }: TableProps<T>): JSX.Element => {
  return (
    <TableWrapper>
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
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((col) => (
                <Td key={String(col.accessor)} align={col.align}>
                  {String(row[col.accessor])}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default Table
