import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environment/environment';
import { Projects, Project } from '../models/projects.interface';

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
  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.projects);
  }

  /**
   * Получение проекта по ID
   */
  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.projects}/${id}`);
  }
}