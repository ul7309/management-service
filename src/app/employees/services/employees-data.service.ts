import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee.interface';
import { EmployeeAppwriteService } from './employees-appwrite.service';
//import { EmployeesService } from './employees.service';

interface EmployeeDataService {
  getEmployees(): Observable<Employee[]>;
  getEmployee(employeeId: string | null): Observable<Employee>;
  createEmployee(employee: Employee): Observable<Employee>;
  updateEmployee(employee: Employee, employeeId: string | null): Observable<Employee>;
}

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {
  constructor(@Inject(EmployeeAppwriteService) private employeeDataService: EmployeeDataService) {}

  getEmployees(): Observable<Employee[]> {
    return this.employeeDataService.getEmployees();
  }

  getEmployee(employeeId: string | null): Observable<Employee> {
    return this.employeeDataService.getEmployee(employeeId);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.employeeDataService.createEmployee(employee);
  }

  updateEmployee(employee: Employee, employeeId: string | null): Observable<Employee> {
    return this.employeeDataService.updateEmployee(employee, employeeId);
  }
}