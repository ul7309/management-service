import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';

export default [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectComponent },
];