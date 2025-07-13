import React, { useState, useMemo } from 'react';

import { useIsMobile } from './useMobile';
import LoadingTable from './components/LoadingTable';
import {
  CollapseRow,
  CollapseTd,
  IconChevronDownStyled,
  IconChevronUpStyled,
  StyledTable,
  TableWrapper,
  Td,
  Th,
  Thead,
  Tr
} from './Table.style';
import type { TableProps } from './Table.types';

const MOBILE_VISIBLE_COLUMNS = 2;

const Table = <T extends { id: number | string }>({
  columns,
  data,
  dataTestId = 'react-table',
  isLoading = false
}: TableProps<T>): React.ReactElement => {
  const isMobile = useIsMobile();
  const [expandedRows, setExpandedRows] = useState<(number | string)[]>([]);

  const visibleColumns = useMemo(
    () => (isMobile ? columns.slice(0, MOBILE_VISIBLE_COLUMNS) : columns),
    [isMobile, columns]
  );
  const totalColumns = useMemo(
    () => visibleColumns.length + (isMobile ? 1 : 0),
    [visibleColumns, isMobile]
  );

  const toggleRow = (id: number | string) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <TableWrapper data-testid={dataTestId}>
      <StyledTable>
        <Thead>
          <tr>
            {visibleColumns.map((col) => (
              <Th key={String(col.accessor)} $align={col.align} $isMobile={isMobile}>
                {col.header}
              </Th>
            ))}
            {isMobile && (
              <Th $align="right" style={{ padding: '0 2.7rem' }}>
                ●
              </Th>
            )}
          </tr>
        </Thead>
        <tbody>
          {isLoading ? (
            <LoadingTable colSpan={totalColumns} />
          ) : (
            data.map((row) => (
              <React.Fragment key={row.id}>
                <Tr
                  $isMobile={isMobile}
                  $isExpanded={expandedRows.includes(row.id)}
                  onClick={() => toggleRow(row.id)}
                >
                  {visibleColumns.map((col) => (
                    <Td key={String(col.accessor)} align={col.align} $isMobile={isMobile}>
                      {col.render ? col.render(row[col.accessor], row) : String(row[col.accessor])}
                    </Td>
                  ))}
                  {isMobile && (
                    <Td $align="right" $isMobile={isMobile} style={{ padding: '0 1.6rem' }}>
                      {expandedRows.includes(row.id) ? (
                        <IconChevronUpStyled width={32} height={32} />
                      ) : (
                        <IconChevronDownStyled width={32} height={32} />
                      )}
                    </Td>
                  )}
                </Tr>

                {isMobile && expandedRows.includes(row.id) && (
                  <CollapseRow>
                    <CollapseTd
                      colSpan={totalColumns}
                      $isMobile={isMobile}
                      className="collapse-row"
                    >
                      {columns.slice(MOBILE_VISIBLE_COLUMNS).map((col) => (
                        <div key={String(col.accessor)}>
                          {'• '}
                          <strong>{col.header}:</strong>{' '}
                          {col.render
                            ? col.render(row[col.accessor], row)
                            : String(row[col.accessor])}
                        </div>
                      ))}
                    </CollapseTd>
                  </CollapseRow>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
