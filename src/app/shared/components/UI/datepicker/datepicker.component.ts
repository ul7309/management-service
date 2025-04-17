import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DatePickerModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  @Input() key!: string;
  @Input() label!: string;
  @Input() required = false;
  @Input() error = false;
  @Input() control!: FormControl;
  @Input() selectionMode: 'single' | 'multiple' | 'range' = 'single';
}