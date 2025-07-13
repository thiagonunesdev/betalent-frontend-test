import styled from 'styled-components';

import { Theme } from '@theme/Theme';
import { IconSearch } from '@components/Icons';
import type { TextInputProps } from './TextInput.type';

const { breakpoints, borderRadius, colors, shadows, spaces } = Theme;

export const InputWrapper = styled.div`
  width: 29rem;
  position: relative;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const StyledInput = styled.input<TextInputProps & { hasClear: boolean }>`
  width: 100%;
  border: 0.1rem solid ${colors.gray10};
  border-radius: ${borderRadius.medium};
  padding: ${spaces.regular.xs};
  padding-right: ${({ showSearchIcon, hasClear }) => {
    if (showSearchIcon && hasClear) {
      return '5.0rem';
    }
    if (showSearchIcon || hasClear) {
      return '3.2rem';
    }
    return '1.6rem';
  }};
  transition: 0.2s all ease-out;
  &::placeholder {
    color: ${colors.gray20};
  }

  &:focus {
    border-color: ${colors.blue_primary};
    box-shadow: ${shadows.sm} ${colors.blue_primary};
    outline: none;
  }
`;

export const IconSearchStyled = styled(IconSearch)`
  fill: ${colors.gray10};
  pointer-events: none;
  position: absolute;
  right: ${spaces.regular.xs};
  top: 50%;
  transform: translateY(-50%);
`;

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.blue_primary};
  cursor: pointer;
  font-size: 2rem;
  line-height: 1;
  padding: 0;
  position: absolute;
  right: ${spaces.medium.md};
  top: 50%;
  transform: translateY(-50%);
`;
