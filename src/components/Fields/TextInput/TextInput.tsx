import { IconSearchStyled, InputWrapper, StyledInput } from './TextInput.style'
import type { FC } from 'react'
import type { TextInputProps } from './TextInput.type'

const TextInput: FC<TextInputProps> = ({ showSearchIcon = true, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput
        id="text-input"
        data-testid="text-input"
        type="text"
        showSearchIcon={showSearchIcon}
        {...props}
      />
      {showSearchIcon && <IconSearchStyled width={24} height={24} />}
    </InputWrapper>
  )
}

export default TextInput
