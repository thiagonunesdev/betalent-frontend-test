import styled from 'styled-components';

import { Theme } from '@theme/Theme';
import { RowFlex } from '@styles/Layout.styles';

const { breakpoints, spaces } = Theme;

export const SubHeaderContent = styled(RowFlex)`
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.sm}) {
    align-items: inherit;
  }
`;

export const MainContent = styled(RowFlex)`
  margin-top: ${spaces.medium.sm};
`;
