import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { Employee, FormField, FormMode } from '../../pages/employee/employee.interface';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, CommonModule, InputTextModule, ButtonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})

export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() employee: Employee = {} as Employee;
  @Input() mode: FormMode = FormMode.Create;
  @Output() modeChange = new EventEmitter<FormMode>();

  myForm: FormGroup;
  FormMode = FormMode;

  fields: FormField[] = [
    { key: 'label', label: 'ФИО', validators: [Validators.required], required: true },
    { key: 'department', label: 'Отдел', validators: [Validators.required], required: true },
    { key: 'mainInformation', label: 'Главная информация', validators: [Validators.required], required: true },
    { key: 'education', label: 'Образование', validators: [Validators.required], required: true },
    { key: 'grade', label: 'Грейд', validators: [Validators.required], required: true },
    { key: 'location', label: 'Локация', validators: [Validators.required], required: true },
    { key: 'englishLevel', label: 'Уровень английского', validators: [Validators.required], required: true },
    { key: 'specialization', label: 'Специализация', validators: [Validators.required], required: true },
    { key: 'coverLetter', label: 'Сопроводительное письмо', validators: [Validators.required], required: true },
    { key: 'supervisor', label: 'Руководитель', validators: [Validators.required], required: true },
  ];

  constructor() {
    this.myForm = new FormGroup({});

    this.fields.forEach(field => {
      this.myForm.addControl(field.key, new FormControl('', field.validators));
    });
  }

  ngOnInit(): void {
    this.populateForm(this.employee);

    this.myForm.valueChanges.subscribe(values => {
      const updatedEmployee: Employee = { ...this.employee, ...values };
      this.employee = updatedEmployee;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) this.updateFormState();
  }

  hasError(controlName: string): boolean {
    const control = this.myForm.controls[controlName];
    return control.invalid && control.touched;
  }

  isVisibleSaveBtn(): boolean {
    return this.mode === FormMode.Edit || this.mode === FormMode.Create
  }

  populateForm(employee: Employee): void {
    Object.keys(this.myForm.controls).forEach(key => {
        const employeeKey = key as keyof Employee; 
        if (employee[employeeKey] !== undefined) this.myForm.controls[key].setValue(employee[employeeKey]);
    });
  }

  updateFormState(): void {
    if (this.mode === FormMode.View) {
      this.myForm.disable();
    } else {
      this.myForm.enable();
    }
  }

  private setMode(newMode: FormMode) {
    if (this.mode !== newMode) {
      this.mode = newMode;
      this.updateFormState();
      this.modeChange.emit(this.mode);
    }
  }

  change() {
    this.setMode(FormMode.Edit);
  }

  submit() {
    console.log('employee', this.employee);
    this.setMode(FormMode.View);
  }
}
