import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { LayoutComponent } from '@layout/layout.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

import { EmployeesService } from '../../services/employees-data.service';
import { Employee } from '../../models/employee.interface';
import { Projects } from '../../../projects/models/projects.interface';
import { FormMode } from '@shared/models/form-mode.enum';

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
  projects: Projects[] = [];

  constructor(
    private employeesService: EmployeesService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const employeeId = this.activateRoute.snapshot.params["id"];
    this.employeesService.getEmployee(employeeId).subscribe((data: Employee) => {
      this.employee = data;
    });
  }

  onModeChange(newMode: FormMode) {
    this.formMode = newMode;
  }

  hasEmployee(): boolean {
    return Object.keys(this.employee).length > 0
  }
}