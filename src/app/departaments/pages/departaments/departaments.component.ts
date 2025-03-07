import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';

import { LayoutComponent } from '@layout/layout.component';

import { DepartamentsService } from '../../services/departaments.service';
import { Departaments } from '../../models/departaments.interface';

@Component({
  selector: 'app-departament',
  imports: [CommonModule, RouterLink, LayoutComponent, Menu],
  templateUrl: './departaments.component.html',
  styleUrl: './departaments.component.scss'
})
export class DepartamentsComponent implements OnInit {
  departaments: Departaments[] = [];
  constructor(private DepartamentsService: DepartamentsService) {}

  ngOnInit(): void {
    this.DepartamentsService.getDepartaments().subscribe((data) => {
      this.departaments = data;
    });
  }
}
