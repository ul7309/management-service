import { Validators } from '@angular/forms';

export interface Project {
  id: string;
  label: string;
  label_nda: string;
  description: string;
  direction: string;
  goal: string;
  functionality: string;
  сustomer: string;
};

export type Projects = Pick<Project, 'id' | 'label'>

/* TODO перенести на общий уровень */
export interface FormField {
  key: string;
  label: string;
  validators: Validators;
  required: boolean;
};

/* TODO перенести на общий уровень */
export enum FormMode {
  Create = 'create',
  Edit = 'edit',
  View = 'view'
};