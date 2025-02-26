import { SimpleEmployee } from '../employee/employee.interface';

export interface Item {
  id: string;
  label: string;
}

export interface Departaments {
  id: string;
  label: string;
  items: Item[];
}

export interface Departament {
  id: string;
  supervisor: string;
  parent: string;
  employee: SimpleEmployee;
}