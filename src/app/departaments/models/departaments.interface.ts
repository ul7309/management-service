import { SimpleEmployee } from '../../employees/models/employee.interface';

export interface Departaments {
  id: string;
  label: string;
  items: Departaments[];
}

export interface Departament {
  id: string;
  parent: string;
  label: string;
  supervisor: SimpleEmployee;
  employess: SimpleEmployee[];
}