import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navigationMenuList = [
    {
      route: '',
      label: 'Главная',
    },
    {
      route: '/employees',
      label: 'Сотрудники',
    },
    {
      route: '/departaments',
      label: 'Отделы',
    },
    {
      route: '/projects',
      label: 'Проекты',
    },
  ];
}
