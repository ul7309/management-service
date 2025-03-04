import { Routes } from '@angular/router';

import employees from '../app/employees/employees.routes';
import departaments from '../app/departaments/departaments.routes';
import projects from '../app/projects/projects.routes';


export const routes: Routes = [
  ...employees,
  ...departaments,
  ...projects,
];
