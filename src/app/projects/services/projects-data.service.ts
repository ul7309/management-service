import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Projects, Project  } from '../models/projects.interface';
import { ProjectsAppwriteService } from './projects-appwrite.service';
//import { ProjectsService } from './projects.service';

interface ProjectsDataService {
  getProjects(): Observable<Projects[]>;
  getProject(id: string): Observable<Project>;
  createProject(params: Project): Observable<Project>;
}

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {
  constructor(@Inject(ProjectsAppwriteService) private projectsDataService: ProjectsDataService) {}

  /**
   * Получение всех проектов
   */
  getProjects(): Observable<Projects[]> {
    return this.projectsDataService.getProjects();
  }

  /**
   * Получение проекта по ID
   */
  getProject(id: string): Observable<Project> {
    return this.projectsDataService.getProject(id);
  }

  /**
   * Создать проект
   */
  createProject(params: Project): Observable<Project> {
    return this.projectsDataService.createProject(params);
  }
}