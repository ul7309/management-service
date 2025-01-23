import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../pages/employee/employee.interface';

@Injectable({
  providedIn: 'root',
})

export class EmployeesService {
  private baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  /**
   * Получение всех сотрудников
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  /**
   * Получение сотрудника по ID
   */
  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
}