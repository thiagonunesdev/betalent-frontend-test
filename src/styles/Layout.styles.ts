import styled from 'styled-components'

import { Theme } from '@theme/Theme'

const { spaces } = Theme

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: ${spaces.medium.sm};
  box-sizing: border-box;
`

export const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
