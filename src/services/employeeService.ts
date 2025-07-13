import axios from 'axios';

import type { Employee } from 'types/Employee';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const employeeService = {
  getAll: async (): Promise<Employee[]> => {
    const response = await api.get<Employee[]>('/employees');
    return response.data;
  },

  getById: async (id: number): Promise<Employee> => {
    const response = await api.get<Employee[]>(`/employees?id=${id}`);
    const employee = response.data[0];

    if (!employee) {
      throw new Error(`Funcionário com id ${id} não encontrado.`);
    }

    return employee;
  },

  create: async (data: Omit<Employee, 'id'>): Promise<Employee> => {
    const response = await api.post<Employee>('/employees', data);
    return response.data;
  },

  update: async (id: number, data: Partial<Omit<Employee, 'id'>>): Promise<Employee> => {
    const response = await api.put<Employee>(`/employees/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/employees/${id}`);
  }
};
