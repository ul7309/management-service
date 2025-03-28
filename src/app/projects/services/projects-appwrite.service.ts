import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Models } from 'appwrite';
import { v4 as uuidv4 } from 'uuid';

import { Projects, Project } from '../models/projects.interface';

import { AppwriteService } from '@shared/services/appwrite.service';
import { AppwriteResponse } from '@shared/models/appwrite-response';
import { APPWRITE_DB_ID, APPWRITE_PROJECTS_ID } from '@shared/constants';

@Injectable({
  providedIn: 'root',
})

export class ProjectsAppwriteService {
  constructor(private appwriteService: AppwriteService) { }

  mapDocumentToProject(doc: Models.Document): Project {
    return {
      id: doc['$id'],
      label: doc['label'],
      label_nda: doc['label_nda'],
      description: doc['description'],
      direction: doc['direction'],
      goal: doc['goal'],
      functionality: doc['functionality'],
      customer: doc['customer'],
    };
  }

  getProjects(): Observable<Projects[]> {
    return from(this.appwriteService.db.listDocuments(APPWRITE_DB_ID, APPWRITE_PROJECTS_ID))
      .pipe(
        map((response: AppwriteResponse) => {
          return response.documents.map(doc => this.mapDocumentToProject(doc));
        })
      );
  }

  getProject(projectId: string): Observable<Project> {
    return from(this.appwriteService.db.getDocument(APPWRITE_DB_ID, APPWRITE_PROJECTS_ID, projectId))
      .pipe(
        map((doc: Models.Document) => this.mapDocumentToProject(doc)),
      );
  }

  createProject(project: Project): Observable<Models.Document> {
    return from(this.appwriteService.db.createDocument(APPWRITE_DB_ID, APPWRITE_PROJECTS_ID, uuidv4(), project))
  }
}