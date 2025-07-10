import Header from '@components/Header/Header'
import GlobalStyles from './styles/Global.styles'
import UsersPage from 'pages/Users.page'
import { Main } from '@styles/Layout.styles'
import type { JSX } from 'react'

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <UsersPage />
      </Main>
    </>
  )
}

export default App
