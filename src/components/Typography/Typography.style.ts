import styled from 'styled-components'

import { Typography, TypographyStyleTypes } from '@components/Typography/Typography.type'
import type { TypographyTypeProps } from '@components/Typography/Typography.type'

const variants: Record<string, Record<string, string>> = Object.keys(Typography).reduce(
  (ac, type) => {
    const css = {
      [type]: TypographyStyleTypes[type].css
    }
    return { ...ac, ...css }
  },
  {}
)

const StyledTextBase = styled.span<TypographyTypeProps>`
  ${(props) => variants[props.textType]}
`

export default StyledTextBase
