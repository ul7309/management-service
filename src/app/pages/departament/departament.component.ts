import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { LayoutComponent } from '../../layout/layout.component';

import { Departament } from '../../shared/models/departaments.interface';
import { DepartamentsService } from '../../services/departaments.service';

@Component({
  selector: 'app-departament',
  imports: [CommonModule, RouterLink, LayoutComponent, Menu, ButtonModule],
  templateUrl: './departament.component.html',
  styleUrl: './departament.component.scss'
})

export class DepartamentComponent implements OnInit {
  departament: Departament = {} as Departament;
  constructor(private DepartamentsService: DepartamentsService) {}

  ngOnInit(): void {
    this.DepartamentsService.getDepartament(1).subscribe((data: Departament) => {
      this.departament = data;
    });
  }

  title(): string {
    return `Карточка отдела - ${this.departament.label}`;
  }
}
