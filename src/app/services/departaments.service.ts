import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Departaments } from '../pages/departaments/departaments.interface';

@Injectable({
  providedIn: 'root',
})

export class DepartamentsService {
  private baseUrl = 'http://localhost:3000/departaments';

  constructor(private http: HttpClient) {}

  /**
   * Получение всех отделов
   */
  getDepartaments(): Observable<Departaments[]> {
    return this.http.get<Departaments[]>(this.baseUrl);
  }
}