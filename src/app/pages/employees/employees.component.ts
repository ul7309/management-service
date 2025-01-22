import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';

import { LayoutComponent } from '../../layout/layout.component';

interface Employee {
  id: string;
  fio: string;
  department: string;
  mainInformation: string;
  education: string;
  grade: string;
  location: string;
  englishLevel: string;
  specialization: string;
  coverLetter: string;
  supervisor: string;
}

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink, MatListModule, LayoutComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})

export class EmployeesComponent {
  employees: Employee[] = [
    {
      id: '1',
      fio: 'Сотрудник 1',
      department: 'Отдел',
      mainInformation: 'Главная информация',
      education: 'Образование',
      grade: 'Грейд',
      location: 'Локация',
      englishLevel: 'Уровень английского',
      specialization: 'Специализация',
      coverLetter: 'Сопроводительное письмо',
      supervisor: 'Руководитель',
    },
    {
      id: '2',
      fio: 'Сотрудник 2',
      department: 'Отдел',
      mainInformation: 'Главная информация',
      education: 'Образование',
      grade: 'Грейд',
      location: 'Локация',
      englishLevel: 'Уровень английского',
      specialization: 'Специализация',
      coverLetter: 'Сопроводительное письмо',
      supervisor: 'Руководитель',
    },
    {
      id: '3',
      fio: 'Сотрудник 3',
      department: 'Отдел',
      mainInformation: 'Главная информация',
      education: 'Образование',
      grade: 'Грейд',
      location: 'Локация',
      englishLevel: 'Уровень английского',
      specialization: 'Специализация',
      coverLetter: 'Сопроводительное письмо',
      supervisor: 'Руководитель',
    },
    {
      id: '4',
      fio: 'Сотрудник 4',
      department: 'Отдел',
      mainInformation: 'Главная информация',
      education: 'Образование',
      grade: 'Грейд',
      location: 'Локация',
      englishLevel: 'Уровень английского',
      specialization: 'Специализация',
      coverLetter: 'Сопроводительное письмо',
      supervisor: 'Руководитель',
    },
    {
      id: '5',
      fio: 'Сотрудник 5',
      department: 'Отдел',
      mainInformation: 'Главная информация',
      education: 'Образование',
      grade: 'Грейд',
      location: 'Локация',
      englishLevel: 'Уровень английского',
      specialization: 'Специализация',
      coverLetter: 'Сопроводительное письмо',
      supervisor: 'Руководитель',
    }
  ];
}
