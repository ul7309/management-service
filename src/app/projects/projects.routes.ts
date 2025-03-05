import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';

export default [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/add', component: AddProjectComponent },
  { path: 'project/:id', component: ProjectComponent },
];