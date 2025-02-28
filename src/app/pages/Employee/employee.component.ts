import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from '../../layout/layout.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

import { Employee, FormMode } from './employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, LayoutComponent, EmployeeFormComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
})

export class EmployeeComponent implements OnInit {
  formMode: FormMode = FormMode.View;
  employee: Employee = {} as Employee;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.employeesService.getEmployee(1).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

  onModeChange(newMode: FormMode) {
    this.formMode = newMode;
  }

  hasEmployee(): boolean {
    return Object.keys(this.employee).length > 0
  }

  submit() {
    console.log('submit');
  }
}