import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Departaments } from '../models/departaments.interface';
import { DepartamentsAppwriteService } from './departaments-appwrite.service';
//import { DepartamentsService } from './departaments.service';

interface DepartamentsDataService {
  getDepartaments(): Observable<Departaments[]>;
}

@Injectable({
  providedIn: 'root',
})

export class DepartamentsService {
  constructor(@Inject(DepartamentsAppwriteService) private departamentDataService: DepartamentsDataService) {}

  /**
   * Получение всех сотрудников
   */
  getDepartaments(): Observable<Departaments[]> {
    return this.departamentDataService.getDepartaments();
  }
}