import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { employeeService } from 'services/employeeService';
import type { Employee } from 'types/Employee';

export const useEmployees = () => {
  return useQuery<Employee[]>({
    queryKey: ['employee'],
    queryFn: employeeService.getAll
  });
};

export const useEmployeeById = (id: number | undefined) => {
  return useQuery<Employee>({
    queryKey: ['employee', id],
    queryFn: () => employeeService.getById(id!),
    enabled: !!id
  });
};

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Employee, 'id'>) => employeeService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['employee'] });
    }
  });
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Omit<Employee, 'id'>> }) =>
      employeeService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Employees'] });
    }
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: employeeService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Employees'] });
    }
  });
};
