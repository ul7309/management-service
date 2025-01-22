import { Routes } from '@angular/router';

import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component'; 

export const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
];
