import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, LayoutComponent, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
})

export class EmployeeComponent {
  myForm: FormGroup;

  fields = [
    { key: 'fio', label: 'ФИО', validators: [Validators.required] },
    { key: 'department', label: 'Отдел', validators: [Validators.required] },
    { key: 'mainInformation', label: 'Главная информация', validators: [Validators.required] },
    { key: 'education', label: 'Образование', validators: [Validators.required] },
    { key: 'grade', label: 'Грейд', validators: [Validators.required] },
    { key: 'location', label: 'Локация', validators: [Validators.required] },
    { key: 'englishLevel', label: 'Уровень английского', validators: [Validators.required] },
    { key: 'specialization', label: 'Специализация', validators: [Validators.required] },
    { key: 'coverLetter', label: 'Сопроводительное письмо', validators: [Validators.required] },
    { key: 'supervisor', label: 'Руководитель', validators: [Validators.required] },
  ];

  constructor() {
    this.myForm = new FormGroup({});

    this.fields.forEach(field => {
      this.myForm.addControl(field.key, new FormControl('', field.validators));
    });
  }

  hasError(controlName: string): boolean {
    const control = this.myForm.controls[controlName];
    return control.invalid && control.touched;
  }

  submit() {
    console.log(this.myForm);
  }
}