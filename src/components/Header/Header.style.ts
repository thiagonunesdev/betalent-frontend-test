import styled from 'styled-components';

import { Theme } from '@theme/Theme';

const { colors, shadows } = Theme;

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${colors.white};
  box-shadow: ${shadows.sm};
  display: flex;
  height: 6rem;

  svg {
    margin-left: -1rem;
  }
`;
