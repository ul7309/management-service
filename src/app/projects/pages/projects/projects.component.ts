import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LayoutComponent } from '@layout/layout.component';

import { ProjectsService } from '../../services/projects-data.service';
import { Projects } from '../../models/projects.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, LayoutComponent, Menu, ButtonModule, ProgressSpinnerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];
  isLoading = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
      this.isLoading = false;
    });
  }
}
