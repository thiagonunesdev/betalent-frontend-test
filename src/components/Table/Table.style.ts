import { Theme } from '@theme/Theme';

import styled from 'styled-components';

const ROW_HEIGHT = '4.8rem';
const { borderRadius, colors, fonts, spaces } = Theme;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 60rem;
`;

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
`;

export const Th = styled.th<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
  padding: ${spaces.litle.sm} ${spaces.medium.sm};
  font-weight: ${fonts.h2.fontWeight};
  font-size: ${fonts.h2.fontSize};
  border-bottom: 1px solid ${colors.gray10};
  height: ${ROW_HEIGHT};
`;

export const Td = styled.td<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
  padding: ${spaces.litle.sm} ${spaces.medium.sm};
  border-bottom: 1px solid ${colors.gray10};
  font-size: ${fonts.h3.fontSize};
  font-weight: ${fonts.h3.fontWeight};
`;

export const Tr = styled.tr`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray10};
  height: ${ROW_HEIGHT};
`;
