import TextInput from '@components/Fields/TextInput/TextInput'
import { H1 } from '@components/Typography'
import { Container } from '@styles/Layout.styles'
import { Theme } from '@theme/Theme'
import { MainContent, SubHeaderContent } from './Users.page.style'
import Table from '@components/Table/Table'
import type { JSX } from 'react'
import type { Column } from '@components/Table/Table.types'

const { colors } = Theme

const UsersPage = (): JSX.Element => {
  type User = {
    name: string
    age: number
    email: string
  }

  const columns: Column<User>[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age', align: 'center' },
    { header: 'Email', accessor: 'email', align: 'right' }
  ]

  const data: User[] = [
    { name: 'Alice', age: 28, email: 'alice@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' }
  ]

  return (
    <Container>
      <SubHeaderContent>
        <H1 color={colors.black}>Funcionários</H1>
        <TextInput placeholder={'Pesquisar'} />
      </SubHeaderContent>
      <MainContent>
        <Table columns={columns} data={data} />
      </MainContent>
    </Container>
  )
}

export default UsersPage
