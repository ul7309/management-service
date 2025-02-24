import { SimpleEmployee } from '../employee/employee.interface';

export interface Item {
  id: string;
  name: string;
}

export interface Departaments {
  id: string;
  name: string;
  items: Item[];
}

export interface Departament {
  id: string;
  supervisor: string;
  parent: string;
  employee: SimpleEmployee;
}