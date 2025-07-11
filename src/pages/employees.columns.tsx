import type { Column } from '@components/Table/Table.types';
import { formatDate, formatPhone } from 'utils/format';
import Avatar from '@components/Avatar/Avatar';
import type { Employee } from 'types/Employee';

export const employeesColumns: Column<Employee>[] = [
  {
    header: 'Foto',
    accessor: 'image',
    render: (_, row) => <Avatar id={row.id} name={row.name} />
  },
  { header: 'Nome', accessor: 'name' },
  { header: 'Cargo', accessor: 'job' },
  {
    header: 'Data de admissão',
    accessor: 'admission_date',
    render: (value) => formatDate(value as string)
  },
  { header: 'Telefone', accessor: 'phone', render: (value) => formatPhone(value as string) }
];
