import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee.interface';
import { EmployeeAppwriteService } from './employees-appwrite.service';
//import { EmployeesService } from './employees.service';

interface EmployeeDataService {
  getEmployees(): Observable<Employee[]>;
  getEmployee(id: string): Observable<Employee>;
  createEmployee(id: Employee): Observable<Employee>;
}

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {
  constructor(@Inject(EmployeeAppwriteService) private employeeDataService: EmployeeDataService) {}

  /**
   * Получение всех сотрудников
   */
  getEmployees(): Observable<Employee[]> {
    return this.employeeDataService.getEmployees();
  }

  /**
   * Получение сотрудника по ID
   */
  getEmployee(id: string): Observable<Employee> {
    return this.employeeDataService.getEmployee(id);
  }

  /**
   * Создать сотрудника сотрудника
   */
  createEmployee(params: Employee): Observable<Employee> {
    return this.employeeDataService.createEmployee(params);
  }
}