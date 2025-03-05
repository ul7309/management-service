import { Component } from '@angular/core';

import { FormMode } from '../../models/projects.interface';

import { LayoutComponent } from '../../../layout/layout.component';
import { ProjectFormComponent } from '../../components/project-form/project-form.component';

@Component({
  selector: 'app-add-project',
  imports: [LayoutComponent, ProjectFormComponent],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})

export class AddProjectComponent {
  formMode: FormMode = FormMode.Create;
}
