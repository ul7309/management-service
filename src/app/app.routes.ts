import { Routes } from '@angular/router';
import employeesRoutes from '../app/employees/employees.routes';
import departamentsRoutes from '../app/departaments/departaments.routes';


export const routes: Routes = [
  ...employeesRoutes,
  ...departamentsRoutes,
];
