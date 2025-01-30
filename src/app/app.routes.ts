import { Routes } from '@angular/router';

import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component'; 
import { DepartamentsComponent } from './pages/departaments/departaments.component'; 

export const routes: Routes = [
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departaments', component: DepartamentsComponent },
];
