import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from '../../../layout/layout.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/projects.interface';
import { FormMode } from '../../../shared/models/form-mode.enum';

@Component({
  selector: 'app-project',
  imports: [CommonModule, LayoutComponent, ProjectFormComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  formMode: FormMode = FormMode.View;
  project: Project = {} as Project;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projectsService.getProject(1).subscribe((data: Project) => {
      this.project = data;
    });
  }

  onModeChange(newMode: FormMode) {
    this.formMode = newMode;
  }

  hasProjects(): boolean {
    return Object.keys(this.project).length > 0;
  }
}
