import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Models } from 'appwrite';
import { v4 as uuidv4 } from 'uuid';

import { Employee } from '../models/employee.interface';

import { AppwriteService } from '@shared/services/appwrite.service';
import { AppwriteResponse } from '@shared/models/appwrite-response';
import { APPWRITE_DB_ID, APPWRITE_EMPLOYEES_ID } from '@shared/constants';

@Injectable({
  providedIn: 'root',
})

export class EmployeeAppwriteService {
  constructor(private appwriteService: AppwriteService) { }

  mapDocumentToEmployee(doc: Models.Document): Employee {
    return {
      coverLetter: doc['coverLetter'],
      departmentId: doc['departmentId'],
      education: doc['education'],
      englishLevel: doc['englishLevel'],
      grade: doc['grade'],
      id: doc['id'],
      label: doc['label'],
      location: doc['location'],
      mainInformation: doc['mainInformation'],
      specialization: doc['specialization'],
      supervisor: doc['supervisor'],
      project: doc['project'],
    };
  }

  getEmployees(): Observable<Employee[]> {
    return from(this.appwriteService.db.listDocuments(APPWRITE_DB_ID, APPWRITE_EMPLOYEES_ID))
      .pipe(
        map((response: AppwriteResponse) => {
          return response.documents.map(doc => this.mapDocumentToEmployee(doc));
        })
      );
  }

  getEmployee(employeeId: string): Observable<Employee> {
    return from(this.appwriteService.db.getDocument(APPWRITE_DB_ID, APPWRITE_EMPLOYEES_ID, employeeId))
      .pipe(
        map((doc: Models.Document) => this.mapDocumentToEmployee(doc)),
      );
  }

  createEmployee(employee: Employee): Observable<Models.Document> {
    return from(this.appwriteService.db.createDocument(APPWRITE_DB_ID, APPWRITE_EMPLOYEES_ID, uuidv4(), employee));
  }

  updateEmployee(employee: Employee, employeeId: string): Observable<Models.Document> {
    return from(this.appwriteService.db.updateDocument(APPWRITE_DB_ID, APPWRITE_EMPLOYEES_ID, employeeId, employee));
  }
}