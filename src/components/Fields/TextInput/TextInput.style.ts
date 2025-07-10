import styled from 'styled-components'

import { Theme } from '@theme/Theme'
import IconSearch from '@components/Icons/IconSearch'
import type { TextInputProps } from './TextInput.type'

const { borderRadius, colors, spaces } = Theme

export const InputWrapper = styled.div`
  max-width: 29rem;
  position: relative;
  width: 100%;
`

export const StyledInput = styled.input<TextInputProps>`
  width: 100%;
  border: 0.1rem solid ${colors.gray10};
  border-radius: ${borderRadius.medium};
  padding: ${spaces.regular.xs};
  padding-right: ${(props) => (props.showSearchIcon ? spaces.medium.md : spaces.regular.xs)};
  &::placeholder {
    color: ${colors.gray20};
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0.4rem ${colors.blue_primary};
    outline: none;
  }
`

export const IconSearchStyled = styled(IconSearch)`
  fill: ${colors.gray10};
  pointer-events: none;
  position: absolute;
  right: ${spaces.regular.xs};
  top: 50%;
  transform: translateY(-50%);
`
