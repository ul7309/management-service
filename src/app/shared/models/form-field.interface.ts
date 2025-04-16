import { ValidatorFn } from '@angular/forms';

/**
 * Интерфейс для описания полей формы.
 *
 * @interface FormField
 */
export interface FormField {
  key: string;
  label: string;
  validators?: ValidatorFn[];
  required?: boolean;
  isGroup?: boolean;
  fields?: FormField[];
}