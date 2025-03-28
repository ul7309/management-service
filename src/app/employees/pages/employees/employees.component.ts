import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LayoutComponent } from '@layout/layout.component';

import { EmployeesService } from '../../services/employees-data.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink, Menu, ButtonModule, ProgressSpinnerModule, LayoutComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})

export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = false;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.employeesService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.isLoading = false;
    });
  }
}
