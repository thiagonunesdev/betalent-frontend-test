import type { FC } from 'react';

import { ClearButton, IconSearchStyled, InputWrapper, StyledInput } from './TextInput.style';
import type { TextInputProps } from './TextInput.type';

const TextInput: FC<TextInputProps> = ({
  onChange,
  onClear,
  showSearchIcon = true,
  value = '',
  ...props
}) => {
  return (
    <InputWrapper>
      <StyledInput
        data-testid="text-input"
        hasClear={Boolean(value)}
        id="text-input"
        onChange={onChange}
        showSearchIcon={showSearchIcon}
        type="text"
        value={value}
        {...props}
      />
      {value && (
        <ClearButton type="button" onClick={onClear} data-testid="clear-input">
          ×
        </ClearButton>
      )}
      {showSearchIcon && <IconSearchStyled width={24} height={24} />}
    </InputWrapper>
  );
};

export default TextInput;
