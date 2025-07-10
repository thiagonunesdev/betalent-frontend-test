import styled, { type StyledComponent } from 'styled-components'

import {
  Typography,
  TypographyStyleTypes,
  type TypographyTypeProps
} from '@components/Typography/Typography.type'

const variants: Record<string, Record<string, string | number>> = Object.keys(Typography).reduce(
  (acc, type) => {
    acc[type] = TypographyStyleTypes[type].css
    return acc
  },
  {} as Record<string, Record<string, string | number>>
)

const StyledTextBase: StyledComponent<'span', object, TypographyTypeProps> =
  styled.span<TypographyTypeProps>`
    ${(props) => variants[props.textType]}
  `

export default StyledTextBase
