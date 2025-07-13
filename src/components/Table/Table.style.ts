import styled from 'styled-components';

import { Theme } from '@theme/Theme';
import { IconChevronUp, IconChevronDown } from '@components/Icons';

const { borderRadius, colors, fonts, spaces } = Theme;
const ROW_HEIGHT = '4.8rem';
const IconColor = `${colors.blue_primary}`;

const getPadding = ($isMobile?: boolean) =>
  $isMobile
    ? `${spaces.regular.xs} 0 ${spaces.regular.xs} ${spaces.regular.xs}`
    : `${spaces.litle.sm} 0 ${spaces.litle.sm} ${spaces.medium.sm}`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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

export const Th = styled.th<{ $align?: string; $isMobile?: boolean }>`
  text-align: ${({ $align }) => $align || 'left'};
  padding: ${({ $isMobile }) => getPadding($isMobile)};
  font-weight: ${fonts.h2.fontWeight};
  font-size: ${fonts.h2.fontSize};
  border-bottom: 1px solid ${colors.gray10};
  height: ${ROW_HEIGHT};
`;

export const Tr = styled.tr<{ $align?: string; $isExpanded?: boolean; $isMobile?: boolean }>`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray10};
  cursor: pointer;
  // Remove mobile border-bottom to avoid duplication
  border-bottom: ${({ $isExpanded }) => $isExpanded && 'none'};
  height: ${ROW_HEIGHT};
`;

export const Td = styled.td<{ $align?: string; $isMobile?: boolean }>`
  text-align: ${({ $align }) => $align || 'left'};
  padding: ${({ $isMobile }) => getPadding($isMobile)};
  font-size: ${fonts.h3.fontSize};
  font-weight: ${fonts.h3.fontWeight};
`;

export const CollapseRow = styled.tr`
  border: 1px solid ${colors.gray10};
  border-top: none;
  cursor: pointer;
`;

export const CollapseTd = styled.td<{ $align?: string; $isMobile?: boolean }>`
  padding: ${({ $isMobile }) => getPadding($isMobile)};
  background-color: ${colors.white};
  font-size: ${fonts.h3.fontSize};
  font-weight: ${fonts.h3.fontWeight};
`;

export const IconChevronUpStyled = styled(IconChevronUp)`
  color: ${IconColor};
`;

export const IconChevronDownStyled = styled(IconChevronDown)`
  color: ${IconColor};
`;
