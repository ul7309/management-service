import { SimpleEmployee } from './employee.interface';

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
  parent: string;
  label: string;
  supervisor: SimpleEmployee;
  employess: SimpleEmployee[];
}