import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Departaments, Departament } from '../shared/models/departaments.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class DepartamentsService {
  private departaments: string;

  constructor(private http: HttpClient) {
    this.departaments = `${environment.apiUrl}/departaments`;
  }

  /**
   * Получение всех отделов
   */
  getDepartaments(): Observable<Departaments[]> {
    return this.http.get<Departaments[]>(this.departaments);
  }

  /**
   * Получение отдела по ID
   */
  getDepartament(id: number): Observable<Departament> {
    return this.http.get<Departament>(`${this.departaments}/${id}`);
  }
}