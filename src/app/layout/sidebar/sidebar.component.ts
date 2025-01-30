import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navigationMenuList = [
    {
      link: '',
      title: 'Главная',
    },
    {
      link: '/employees',
      title: 'Сотрудники',
    },
    {
      link: '/departaments',
      title: 'Отделы',
    },
  ];
}
