import { SimpleEmployee } from '../employee/employee.interface';

export interface Departaments {
  id: string;
  name: string;
}

export interface Departament {
  id: string;
  supervisor: string;
  parent: string;
  employee: SimpleEmployee;
}