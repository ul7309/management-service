import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee.interface';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {}

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
}