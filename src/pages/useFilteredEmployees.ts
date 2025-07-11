import { useMemo } from 'react';

import type { Employee } from 'types/Employee';

export const useFilteredEmployees = (
  employees: Employee[] | undefined,
  query: string
): Employee[] => {
  return useMemo(() => {
    if (!employees) {
      return [];
    }

    const lowerQuery = query.toLowerCase();

    return employees.filter((emp) => {
      return (
        emp.name.toLowerCase().includes(lowerQuery) ||
        emp.job.toLowerCase().includes(lowerQuery) ||
        emp.phone.toLowerCase().includes(lowerQuery)
      );
    });
  }, [employees, query]);
};
