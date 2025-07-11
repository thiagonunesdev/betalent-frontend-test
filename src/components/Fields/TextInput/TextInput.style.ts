import styled from 'styled-components';

import { Theme } from '@theme/Theme';
import { IconSearch } from '@components/Icons';
import type { TextInputProps } from './TextInput.type';

const { borderRadius, colors, shadows, spaces } = Theme;

export const InputWrapper = styled.div`
  max-width: 29rem;
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<TextInputProps>`
  width: 100%;
  border: 0.1rem solid ${colors.gray10};
  border-radius: ${borderRadius.medium};
  padding: ${spaces.regular.xs};
  padding-right: ${(props) => (props.showSearchIcon ? spaces.medium.md : spaces.regular.xs)};
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
