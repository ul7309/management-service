import { Validators} from '@angular/forms';

export interface Employee {
  id: string;
  fio: string;
  department: string;
  mainInformation: string;
  education: string;
  grade: string;
  location: string;
  englishLevel: string;
  specialization: string;
  coverLetter: string;
  supervisor: string;
}

export interface SimpleEmployee {
  id: string;
  fio: string;
  department: string;
}

export interface FormField {
  key: string;
  label: string;
  validators: Validators;
}