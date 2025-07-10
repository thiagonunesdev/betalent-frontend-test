import { createGlobalStyle } from 'styled-components'

import { ResetStyles } from './Reset.styles'
import { Theme } from '@theme/Theme'

const { colors } = Theme

const GlobalStyles = createGlobalStyle`${ResetStyles}

body {
    background-color: ${colors.gray00};
}
`

export default GlobalStyles
