import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutComponent } from '@layout/layout.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

import { FormMode } from '@shared/models/form-mode.enum';
import { ProjectsService } from '../../services/projects-data.service';
import { Project } from '../../models/projects.interface';

@Component({
  selector: 'app-add-project',
  imports: [LayoutComponent, ProjectFormComponent],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})

export class AddProjectComponent {
  formMode: FormMode = FormMode.Create;
  isLoading = false;

  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  create(project: Project): void {
      this.isLoading = true;
      this.projectsService.createProject(project).subscribe({
        next: () => {
          this.router.navigate(['/projects']);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
}
