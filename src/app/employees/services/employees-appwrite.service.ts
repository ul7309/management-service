import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { Employee } from '../models/employee.interface';

import { Client, Account, Databases, Models } from 'appwrite';
import { environment } from '@environment/environment';

const PROJECT_ID = '67e107a8003a3e773a34';
const DB_ID = '67e107fe00127303abd0';
const COLLECTION_ID = '67e1080d00255bddf109';

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

export class EmployeeAppwriteService {
  mapDocumentToEmployee(doc: Models.Document): Employee {
    return {
      coverLetter: doc['coverLetter'],
      departmentId: doc['departmentId'],
      education: doc['education'],
      englishLevel: doc['englishLevel'],
      grade: doc['grade'],
      id: doc['$id'],
      label: doc['label'],
      location: doc['location'],
      mainInformation: doc['mainInformation'],
      specialization: doc['specialization'],
      supervisor: doc['supervisor']
    };
  }

  getEmployees(): Observable<Employee[]> {
    return from(DB.listDocuments(DB_ID, COLLECTION_ID))
      .pipe(
        map((response: AppwriteListDocumentsResponse) => {
          return response.documents.map(doc => this.mapDocumentToEmployee(doc));
        })
      );
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return from(DB.getDocument(DB_ID, COLLECTION_ID, employeeId))
      .pipe(
        map((doc: Models.Document) => this.mapDocumentToEmployee(doc)),
      );
  }

  createEmployee(employee: Employee): Observable<Models.Document> {
    return from(DB.createDocument(DB_ID, COLLECTION_ID, uuidv4(), employee))
  }
}