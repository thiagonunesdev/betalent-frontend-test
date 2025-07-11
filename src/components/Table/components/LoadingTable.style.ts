import styled, { keyframes } from 'styled-components';

import { Theme } from '@theme/Theme';

const { colors } = Theme;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border: 5px solid ${colors.gray10};
  border-top-color: ${colors.blue_primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
