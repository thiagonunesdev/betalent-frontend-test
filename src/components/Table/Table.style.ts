import { Theme } from '@theme/Theme'

import styled from 'styled-components'

const { borderRadius, colors } = Theme

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 60rem;
`

export const Thead = styled.thead`
  background-color: ${colors.blue_primary};
  color: ${colors.white};
  text-transform: uppercase;

  tr:first-child th:first-child {
    border-top-left-radius: ${borderRadius.medium};
  }

  tr:first-child th:last-child {
    border-top-right-radius: ${borderRadius.medium};
  }
`

export const Th = styled.th<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
  padding: 1rem;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 1px solid ${colors.gray10};
`

export const Td = styled.td<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
  padding: 1rem;
  border-bottom: 1px solid ${colors.gray10};
  font-size: 1.3rem;
`

export const Tr = styled.tr`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray10};
`
