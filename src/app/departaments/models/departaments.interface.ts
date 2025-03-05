import { Employee } from '../../employees/models/employee.interface';

export type DepartamentEmployee = Pick<Employee, 'id' | 'label' | 'departmentId'>

export interface Departament {
  id: string;
  label: string;
  parent: string;
  supervisor: DepartamentEmployee;
  employess: DepartamentEmployee[];
}

export interface Departaments extends Pick<Departament, 'id' | 'label'> {
  items: Departaments[];
}