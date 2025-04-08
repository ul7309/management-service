import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextComponent } from '@shared/components/UI/input-text/input-text.component';

import { Employee } from '../../models/employee.interface';
import { FormField } from '@shared/models/form-field.interface';
import { FormMode } from '@shared/models/form-mode.enum';

import { Project } from '../../../projects/models/projects.interface';
import { ParticipationProject } from '@shared/models/participation-project';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule, DialogModule, DatePickerModule, InputTextComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})

export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() employee: Employee = {} as Employee;
  @Input() mode: FormMode = FormMode.Create;
  @Input() isLoading = false;

  @Output() modeChange = new EventEmitter<FormMode>();
  @Output() emitSubmit = new EventEmitter<{ employee: Employee; project: Project; participationProject: ParticipationProject }>();

  myForm: FormGroup;
  project: Project = {} as Project;
  participationProject: ParticipationProject = {} as ParticipationProject;

  employeeFields: FormField[] = [
    { key: 'label', label: 'ФИО', validators: [Validators.required], required: true },
    { key: 'departmentId', label: 'Отдел', validators: [Validators.required], required: true },
    { key: 'mainInformation', label: 'Главная информация', validators: [Validators.required], required: true },
    { key: 'education', label: 'Образование', validators: [Validators.required], required: true },
    { key: 'grade', label: 'Грейд', validators: [Validators.required], required: true },
    { key: 'location', label: 'Локация', validators: [Validators.required], required: true },
    { key: 'englishLevel', label: 'Уровень английского', validators: [Validators.required], required: true },
    { key: 'specialization', label: 'Специализация', validators: [Validators.required], required: true },
    { key: 'coverLetter', label: 'Сопроводительное письмо', validators: [Validators.required], required: true },
    { key: 'supervisor', label: 'Руководитель', validators: [Validators.required], required: true },
  ];

  participationProjectFields: FormField[] = [
    { key: 'name', label: 'Название', validators: [Validators.required], required: true },
    { key: 'date', label: 'Дата', validators: [Validators.required], required: true },
  ];

  projectFields: FormField[] = [
    { key: 'label', label: 'Название проекта', validators: [Validators.required], required: true },
    { key: 'label_nda', label: 'Название под NDA', validators: [Validators.required], required: true },
    { key: 'description', label: 'Описание', validators: [Validators.required], required: true },
    { key: 'direction', label: 'Сфера', validators: [Validators.required], required: true },
    { key: 'goal', label: 'Цель проекта', validators: [Validators.required], required: true },
    { key: 'functionality', label: 'Функциональность', validators: [Validators.required], required: true },
    { key: 'customer', label: 'Заказчик', validators: [Validators.required], required: true },
  ];

  constructor() {
    this.myForm = new FormGroup({});

    this.employeeFields.forEach(field => {
      const isDisabled = this.mode === FormMode.View;
      this.myForm.addControl(field.key, new FormControl({value: '', disabled: isDisabled}, field.validators));
    });

    this.participationProjectFields.forEach(field => {
      const isDisabled = this.mode === FormMode.View;
      this.myForm.addControl(field.key, new FormControl({value: '', disabled: isDisabled}, field.validators));
    });

    this.projectFields.forEach(field => {
      const isDisabled = this.mode === FormMode.View;
      this.myForm.addControl(field.key, new FormControl({value: '', disabled: isDisabled}, field.validators));
    });
  }

  ngOnInit(): void {
    this.populateForm(this.employee);

    this.myForm.valueChanges.subscribe(values => {
      this.employee = { ...this.employee, ...values };
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

  isViewMode(): boolean {
    return this.mode === FormMode.View;
  }

  isEditMode(): boolean {
    return this.mode === FormMode.Edit;
  }

  populateForm(employee: Employee): void {
    Object.keys(this.myForm.controls).forEach(key => {
      if (this.employeeFields.some(f => f.key === key)) {
        const employeeKey = key as keyof Employee;
        if (employee[employeeKey] !== undefined) {
          this.myForm.controls[key].setValue(employee[employeeKey]);
        }
      }
    });
  }

  updateFormState(): void {
    if (this.mode === FormMode.View) {
      this.myForm.disable();
    } else {
      this.myForm.enable();
    }
  }

  change() {
    this.modeChange.emit(FormMode.Edit);
  }

  submit() {
    this.modeChange.emit(FormMode.View);

    const employeeData: Employee = { ...this.employee, ...this.myForm.value };
    const projectData: Project = {} as Project;
    const participationProjectData: ParticipationProject = {} as ParticipationProject;

    this.projectFields.forEach(field => {
      projectData[field.key as keyof Project] = this.myForm.value[field.key];
    });

    this.participationProjectFields.forEach(field => {
      participationProjectData[field.key as keyof ParticipationProject] = this.myForm.value[field.key];
    });

    this.emitSubmit.emit({ employee: employeeData, project: projectData, participationProject: participationProjectData });
  }
}
