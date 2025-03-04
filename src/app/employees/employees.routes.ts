import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

export default [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
];