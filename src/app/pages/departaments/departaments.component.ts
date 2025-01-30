import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LayoutComponent } from '../../layout/layout.component';
import { MatListModule } from '@angular/material/list';

import { Departaments } from '../departaments/departaments.interface';
import { DepartamentsService } from '../../services/departaments.service';

@Component({
  selector: 'app-departament',
  imports: [CommonModule, RouterLink, LayoutComponent, MatListModule],
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
