import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { LayoutComponent } from '@layout/layout.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { EmployeesService } from '../../services/employees-data.service';
import { Employee } from '../../models/employee.interface';
import { FormMode } from '@shared/models/form-mode.enum';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, LayoutComponent, EmployeeFormComponent, ProgressSpinnerModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
})

export class EmployeeComponent implements OnInit {
  formMode: FormMode = FormMode.View;
  employee: Employee = {} as Employee;
  isLoading = false;
  employeeId: string | null = null;

  constructor(
    private employeesService: EmployeesService,
    private activateRoute: ActivatedRoute
  ) {
    this.employeeId = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.employeesService.getEmployee(this.employeeId).subscribe((data: Employee) => {
      this.employee = data;
      this.isLoading = false;
    });
  }

  onModeChange(newMode: FormMode) {
    this.formMode = newMode;
  }

  hasEmployee(): boolean {
    return !this.isLoading && Object.keys(this.employee).length > 0;
  }

  update(employee: Employee): void {
    this.isLoading = true;
    this.employeesService.updateEmployee(employee, this.employeeId).subscribe({
      next: (updatedEmployee: Employee) => {
        this.employee = updatedEmployee;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}