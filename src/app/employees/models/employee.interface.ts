import { Validators} from '@angular/forms';

export interface Employee {
  id: string;
  label: string;
  departmentId: string;
  mainInformation: string;
  education: string;
  grade: string;
  location: string;
  englishLevel: string;
  specialization: string;
  coverLetter: string;
  supervisor: string;
};

export interface FormField {
  key: string;
  label: string;
  validators: Validators;
  required: boolean;
};

export enum FormMode {
  Create = 'create',
  Edit = 'edit',
  View = 'view'
};