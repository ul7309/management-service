import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { LayoutComponent } from '../../../layout/layout.component';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/projects.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, LayoutComponent, Menu, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
