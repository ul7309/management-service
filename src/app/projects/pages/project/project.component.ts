import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { LayoutComponent } from '@layout/layout.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

import { ProjectsService } from '../../services/projects-data.service';
import { Project } from '../../models/projects.interface';
import { FormMode } from '@shared/models/form-mode.enum';

@Component({
  selector: 'app-project',
  imports: [CommonModule, LayoutComponent, ProjectFormComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  formMode: FormMode = FormMode.View;
  project: Project = {} as Project;

  constructor(
    private projectsService: ProjectsService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const projectId = this.activateRoute.snapshot.params["id"];
    this.projectsService.getProject(projectId).subscribe((data: Project) => {
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
