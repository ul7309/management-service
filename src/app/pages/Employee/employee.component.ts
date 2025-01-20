import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'], // или .css
  standalone: true // Указываем, что компонент является самостоятельным
})
export class EmployeeComponent {
  employeeName: string = 'John Doe';

  constructor() {
    // код инициализации
  }
}