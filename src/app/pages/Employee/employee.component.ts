import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

import { LayoutComponent } from '../../layout/layout.component';

import { Employee, FormField } from './employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, LayoutComponent, InputTextModule, FloatLabel, ButtonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: true,
})

export class EmployeeComponent implements OnInit {
  myForm: FormGroup;
  employee: Employee = {} as Employee;
  isEditForm = false;

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

  constructor(private employeesService: EmployeesService) {
    this.myForm = new FormGroup({});

    this.fields.forEach(field => {
      this.myForm.addControl(field.key, new FormControl('', field.validators));
    });

    this.myForm.disable();
  }

  ngOnInit(): void {
    this.employeesService.getEmployee(1).subscribe((data: Employee) => {
      this.employee = data;
      this.populateForm(data);
    });
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
    this.myForm[this.myForm.enabled ? 'disable' : 'enable']();
  }

  submit() {
    console.log(this.myForm);
  }
}