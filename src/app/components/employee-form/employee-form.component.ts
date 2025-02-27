import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { Employee, FormField } from '../../pages/employee/employee.interface';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, CommonModule, FloatLabel, InputTextModule, ButtonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})

export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee = {} as Employee;

  myForm: FormGroup;

  fields: FormField[] = [
    { key: 'label', label: 'ФИО', validators: [Validators.required] },
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

    //this.myForm.disable();
  }

  ngOnInit(): void {
    this.populateForm(this.employee);
  }

  hasError(controlName: string): boolean {
    const control = this.myForm.controls[controlName];
    return control.invalid && control.touched;
  }

  populateForm(employee: Employee): void {
    Object.keys(this.myForm.controls).forEach(key => {
        const employeeKey = key as keyof Employee; 
        if (employee[employeeKey] !== undefined) {
          this.myForm.controls[key].setValue(employee[employeeKey]);
        }
    });
  }

  change() {
    console.log('change');
  }

  submit() {
    console.log('submit');
  }
}
