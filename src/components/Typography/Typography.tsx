import type { FC, JSX } from 'react';
import StyledTextBase from './Typography.style';
import { TypographyTypeNames, Typography, type TypographyProps } from './Typography.type';

const createComponent = (componentTypeName: TypographyTypeNames): FC<TypographyProps> => {
  const componentType = Typography[componentTypeName];
  const StyledText = StyledTextBase.withComponent(componentType.as);
  const props = { textType: componentTypeName };

  const component = ({
    children,
    color,
    dataTestId,
    fontWeight,
    className
  }: TypographyProps): JSX.Element => {
    return (
      <StyledText
        {...props}
        data-testid={dataTestId}
        style={{ color, fontWeight }}
        className={className}
      >
        {children}
      </StyledText>
    );
  };
  component.displayName = componentType.as;

  return component;
};

// create all typography components
export const H1 = createComponent(TypographyTypeNames.Header1);
export const H2 = createComponent(TypographyTypeNames.Header2);
export const H3 = createComponent(TypographyTypeNames.Header3);
export const Text = createComponent(TypographyTypeNames.Text);
