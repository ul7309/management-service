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

  constructor(
    private employeesService: EmployeesService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    const employeeId = this.activateRoute.snapshot.params["id"];
    this.employeesService.getEmployee(employeeId).subscribe((data: Employee) => {
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
}