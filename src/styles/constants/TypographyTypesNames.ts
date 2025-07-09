export const TypographyTypeNames = {
  Header1: 'Header1',
  Header2: 'Header2',
  Header3: 'Header3'
} as const

export type TypographyTypeNames = keyof typeof TypographyTypeNames
