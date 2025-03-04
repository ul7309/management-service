import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/projects.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {
  private projects: string;

  constructor(private http: HttpClient) {
    this.projects = `${environment.apiUrl}/projects`;
  }

  /**
   * Получение всех проектов
   */
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projects);
  }

  /**
   * Получение сотрудника по ID
   */
  // getEmployee(id: number): Observable<Employee> {
  //   return this.http.get<Employee>(`${this.employees}/${id}`);
  // }
}