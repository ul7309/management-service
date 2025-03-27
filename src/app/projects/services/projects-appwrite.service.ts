import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Projects, Project } from '../models/projects.interface';

import { Client, Account, Databases, Models } from 'appwrite';
import { environment } from '@environment/environment';

const PROJECT_ID = '67e107a8003a3e773a34';
const DB_ID = '67e107fe00127303abd0';
const COLLECTION_ID = '67e3e366002155b2ec44';

const client = new Client()
  .setEndpoint(environment.apiUrl)
  .setProject(PROJECT_ID);

export const account = new Account(client);
const DB = new Databases(client);

interface AppwriteListProjectsResponse {
  total: number;
  documents: Models.Document[]; 
}

@Injectable({
  providedIn: 'root',
})

export class ProjectsAppwriteService {
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
    return from(DB.listDocuments(DB_ID, COLLECTION_ID))
      .pipe(
        map((response: AppwriteListProjectsResponse) => {
          return response.documents.map(doc => this.mapDocumentToProject(doc));
        })
      );
  }

  getProject(projectId: string): Observable<Project> {
      return from(DB.getDocument(DB_ID, COLLECTION_ID, projectId))
        .pipe(
          map((doc: Models.Document) => this.mapDocumentToProject(doc)),
        );
    }
}