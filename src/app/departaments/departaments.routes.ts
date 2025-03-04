import { DepartamentsComponent } from './pages/departaments/departaments.component';
import { DepartamentComponent } from './pages/departament/departament.component';
import { AddDepartamentComponent } from './pages/add-departament/add-departament.component';

export default [
  { path: 'departaments', component: DepartamentsComponent },
  { path: 'departament/add', component: AddDepartamentComponent },
  { path: 'departament/:id', component: DepartamentComponent },
];