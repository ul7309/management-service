import { Routes } from '@angular/router';

import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { DepartamentsComponent } from './pages/departaments/departaments.component';
import { DepartamentComponent } from './pages/departament/departament.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: 'departaments', component: DepartamentsComponent },
  { path: 'departament/:id', component: DepartamentComponent },
];
