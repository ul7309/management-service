import { Component } from '@angular/core';

import { LayoutComponent } from '../../../layout/layout.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

import { FormMode } from '../../../shared/models/form-mode.enum';

@Component({
  selector: 'app-add-employee',
  imports: [LayoutComponent, EmployeeFormComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})

export class AddEmployeeComponent {
  formMode: FormMode = FormMode.Create;
}
