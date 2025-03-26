import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Departaments } from '../models/departaments.interface';

import { Client, Account, Databases, Models } from 'appwrite';
import { environment } from '@environment/environment';

const PROJECT_ID = '67e107a8003a3e773a34';
const DB_ID = '67e107fe00127303abd0';
const COLLECTION_ID = '67e2a0510013b969dd49';

const client = new Client()
  .setEndpoint(environment.apiUrl)
  .setProject(PROJECT_ID);

export const account = new Account(client);
const DB = new Databases(client);

interface AppwriteListDocumentsResponse {
  total: number;
  documents: Models.Document[]; 
}

@Injectable({
  providedIn: 'root',
})

export class DepartamentsAppwriteService {
  mapDocumentToDepartament(doc: Models.Document): Departaments {
    return {
      id: doc['$id'],
      label: doc['label'],
      items: doc['items'],
    };
  }

  getDepartaments(): Observable<Departaments[]> {
    return from(DB.listDocuments(DB_ID, COLLECTION_ID))
      .pipe(
        map((response: AppwriteListDocumentsResponse) => {
          return response.documents.map(doc => this.mapDocumentToDepartament(doc));
        })
      );
  }
}