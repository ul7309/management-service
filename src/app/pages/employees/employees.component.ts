import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { LayoutComponent } from '../../layout/layout.component';

import { Employee } from './employees.interface';
import { EmployeeService } from './employees.service';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink, MatListModule, LayoutComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})

export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

     constructor(private employeeService: EmployeeService) {}

     ngOnInit(): void {
       this.employeeService.getEmployees().subscribe((data) => {
         this.employees = data;
       });
     }
}
