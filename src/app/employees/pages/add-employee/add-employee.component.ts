import { Component } from '@angular/core';

import { LayoutComponent } from '@layout/layout.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

import { FormMode } from '@shared/models/form-mode.enum';
import { EmployeesService } from '../../services/employees-data.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-add-employee',
  imports: [LayoutComponent, EmployeeFormComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})

export class AddEmployeeComponent {
  formMode: FormMode = FormMode.Create;
  isLoading = false;

  constructor(private employeesService: EmployeesService) {}

  create(employee: Employee): void {
    this.isLoading = true;
    this.employeesService.createEmployee(employee).subscribe({
      next: () => {
        // Успешное создание сотрудника
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
