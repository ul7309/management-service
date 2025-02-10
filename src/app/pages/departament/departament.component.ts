import { Component, OnInit } from '@angular/core';

import { Departament } from '../departaments/departaments.interface';
import { DepartamentsService } from '../../services/departaments.service';

@Component({
  selector: 'app-departament',
  imports: [],
  templateUrl: './departament.component.html',
  styleUrl: './departament.component.scss'
})
export class DepartamentComponent implements OnInit {
  departament: Departament[] = [];
  constructor(private DepartamentsService: DepartamentsService) {}

  ngOnInit(): void {
    this.DepartamentsService.getDepartament(1).subscribe((data) => {
      this.departament = data;
    });
  }
}
