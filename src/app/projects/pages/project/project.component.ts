import { Component, OnInit } from '@angular/core';

import { LayoutComponent } from '../../../layout/layout.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

import { SimpleProject, FormMode } from '../../models/projects.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  imports: [LayoutComponent, ProjectFormComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  formMode: FormMode = FormMode.View;
  project: SimpleProject = {} as SimpleProject;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projectsService.getProject(1).subscribe((data: SimpleProject) => {
      this.project = data;
    });
  }
}
