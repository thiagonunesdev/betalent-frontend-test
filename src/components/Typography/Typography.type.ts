import { Theme } from '@theme/Theme'
import { TypographyTypeNames } from '@styles/constants/TypographyTypesNames'

interface TypographyTypeProps {
  /** Types of typography components */
  readonly textType: TypographyTypeNames
  readonly dataTestId?: string
}

interface TypographyTypesOptions {
  readonly dataTestId?: string
  /** Acceptable html attributes which will be rendered. */
  readonly as: 'h1' | 'h2' | 'h3' | 'span'
  /** Custom Object of css attributes of a typography component. */
  readonly css?: Record<string, string>
}

interface TypographyProps {
  /** Component content */
  readonly children?: React.ReactNode
  readonly color?: string
  readonly dataTestId?: string
  readonly fontWeight?: number
  readonly className?: string
}

type TypographyTypes = {
  readonly [name in TypographyTypeNames]: TypographyTypesOptions
}

const Typography: TypographyTypes = {
  Header1: {
    as: 'h1'
  },
  Header2: {
    as: 'h2'
  },
  Header3: {
    as: 'h3'
  },
  Text: {
    as: 'span'
  }
}

const TypographyStyleTypes: Record<string, Record<string, Record<string, string | number>>> = {
  Header1: {
    css: {
      fontSize: Theme.fonts.h1.fontSize,
      fontWeight: Theme.fonts.h1.fontWeight,
      lineHeight: Theme.fonts.h1.lineHeight
    }
  },
  Header2: {
    css: {
      fontSize: Theme.fonts.h2.fontSize,
      fontWeight: Theme.fonts.h2.fontWeight,
      lineHeight: Theme.fonts.h2.lineHeight
    }
  },
  Header3: {
    css: {
      fontSize: Theme.fonts.h3.fontSize,
      fontWeight: Theme.fonts.h3.fontWeight,
      lineHeight: Theme.fonts.h3.lineHeight
    }
  },
  Text: {
    css: {
      fontSize: Theme.fonts.text.fontSize,
      fontWeight: Theme.fonts.text.fontWeight,
      lineHeight: Theme.fonts.text.lineHeight
    }
  }
}

export { TypographyTypeNames, Typography, TypographyStyleTypes }
export type { TypographyTypeProps, TypographyProps }
