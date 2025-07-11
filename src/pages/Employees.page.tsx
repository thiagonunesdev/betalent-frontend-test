import { useState, type JSX } from 'react';

import Table from '@components/Table/Table';
import TextInput from '@components/Fields/TextInput/TextInput';
import { H1 } from '@components/Typography';
import { Container } from '@styles/Layout.styles';
import { Theme } from '@theme/Theme';
import { MainContent, SubHeaderContent } from './Employees.page.style';
import { useEmployees } from 'hooks/useEmployees';
import { employeesColumns } from './employees.columns';
import { useFilteredEmployees } from './useFilteredEmployees';

const { colors } = Theme;

const UsersPage = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const { data: employees, isLoading } = useEmployees();
  const filteredEmployees = useFilteredEmployees(employees, input);

  return (
    <Container data-testeid="employees-page">
      <SubHeaderContent>
        <H1 color={colors.black}>Funcionários</H1>
        <TextInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'Pesquisar'}
        />
      </SubHeaderContent>
      <MainContent>
        {<Table columns={employeesColumns} data={filteredEmployees || []} isLoading={isLoading} />}
      </MainContent>
    </Container>
  );
};

export default UsersPage;
