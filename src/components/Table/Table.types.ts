export interface Column<T> {
  header: string;
  accessor: keyof T;
  align?: 'left' | 'center' | 'right';
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  dataTestId?: string;
  isLoading?: boolean;
}
