import StyledTextBase from './Typography.style'
import { TypographyTypeNames, Typography } from './Typography.type'
import type { TypographyProps } from './Typography.type'

const createComponent = (componentTypeName: TypographyTypeNames) => {
  const componentType = Typography[componentTypeName]
  const StyledText = StyledTextBase.withComponent(componentType.as)
  const props = { textType: componentTypeName }

  const component = ({ children, color, dataTestId, fontWeight, className }: TypographyProps) => {
    return (
      <StyledText
        {...props}
        data-testid={dataTestId}
        style={{ color, fontWeight }}
        className={className}
      >
        {children}
      </StyledText>
    )
  }
  component.displayName = componentType.as

  return component
}

// create all typography components
export const H1 = createComponent(TypographyTypeNames.Header1)
export const H2 = createComponent(TypographyTypeNames.Header2)
export const H3 = createComponent(TypographyTypeNames.Header3)
