import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Departaments } from '../pages/departaments/departaments.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class DepartamentsService {
  private departamentsUrl: string;

  constructor(private http: HttpClient) {
    this.departamentsUrl = `${environment.apiUrl}/departaments`;
  }

  /**
   * Получение всех отделов
   */
  getDepartaments(): Observable<Departaments[]> {
    return this.http.get<Departaments[]>(this.departamentsUrl);
  }
}