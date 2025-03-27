import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Models } from 'appwrite';

import { Departaments } from '../models/departaments.interface';

import { AppwriteService } from '@shared/services/appwrite.service';
import { AppwriteResponse } from '@shared/models/appwrite-response';
import { APPWRITE_DB_ID, APPWRITE_DEPARTAMENTS_ID } from '@shared/constants';

@Injectable({
  providedIn: 'root',
})

export class DepartamentsAppwriteService {
  constructor(private appwriteService: AppwriteService) { }

  mapDocumentToDepartament(doc: Models.Document): Departaments {
    return {
      id: doc['$id'],
      label: doc['label'],
      items: doc['items'],
    };
  }

  getDepartaments(): Observable<Departaments[]> {
    return from(this.appwriteService.db.listDocuments(APPWRITE_DB_ID, APPWRITE_DEPARTAMENTS_ID))
      .pipe(
        map((response: AppwriteResponse) => {
          return response.documents.map(doc => this.mapDocumentToDepartament(doc));
        })
      );
  }
}