import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Employee } from '../pages/employee/employee.interface';

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {
  private employees: string;

  constructor(private http: HttpClient) {
    this.employees = `${environment.apiUrl}/employees`;
  }

  /**
   * Получение всех сотрудников
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employees);
  }

  /**
   * Получение сотрудника по ID
   */
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.employees}/${id}`);
  }
}