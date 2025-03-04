import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { LayoutComponent } from '../../../layout/layout.component';
import { Employee } from '../../models/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink, Menu, ButtonModule, LayoutComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})

export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
