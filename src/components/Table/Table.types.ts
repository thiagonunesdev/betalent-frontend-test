export interface Column<T> {
  header: string
  accessor: keyof T
  align?: 'left' | 'center' | 'right'
}

export interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
}
