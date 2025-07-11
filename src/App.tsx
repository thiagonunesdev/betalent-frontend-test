import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from '@components/Header/Header';
import GlobalStyles from './styles/Global.styles';
import UsersPage from 'pages/Employees.page';
import { Main } from '@styles/Layout.styles';
import type { JSX } from 'react';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <Main>
        <UsersPage />
      </Main>
    </QueryClientProvider>
  );
}

export default App;
