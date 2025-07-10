import styled from 'styled-components'

import { Theme } from '@theme/Theme'
import { RowFlex } from '@styles/Layout.styles'

const { spaces } = Theme

export const SubHeaderContent = styled(RowFlex)`
  align-items: center;
  justify-content: space-between;
`

export const MainContent = styled(RowFlex)`
  margin-top: ${spaces.medium.sm};
`
