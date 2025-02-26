import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, PanelModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input() title = '';
}
