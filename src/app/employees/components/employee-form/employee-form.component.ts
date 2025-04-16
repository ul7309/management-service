import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';

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
  standalone: true,
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
  employeeFields: FormField[] = [
    { key: 'fio', label: 'ФИО', validators: [Validators.required], required: true },
    { key: 'departmentId', label: 'Отдел', validators: [Validators.required], required: true },
    { key: 'mainInformation', label: 'Главная информация', validators: [Validators.required], required: true },
    { key: 'education', label: 'Образование', validators: [Validators.required], required: true },
    { key: 'grade', label: 'Грейд', validators: [Validators.required], required: true },
    { key: 'location', label: 'Локация', validators: [Validators.required], required: true },
    { key: 'englishLevel', label: 'Уровень английского', validators: [Validators.required], required: true },
    { key: 'specialization', label: 'Специализация', validators: [Validators.required], required: true },
    { key: 'coverLetter', label: 'Сопроводительное письмо', validators: [Validators.required], required: true },
    { key: 'supervisor', label: 'Руководитель', validators: [Validators.required], required: true },
    { 
      key: 'project', 
      label: 'Проект', 
      isGroup: true,
      fields: [
        { key: 'name', label: 'Название проекта', validators: [Validators.required], required: true },
        { key: 'name_nda', label: 'Название под NDA', validators: [Validators.required], required: true },
        { key: 'description', label: 'Описание', validators: [Validators.required], required: true },
        { key: 'direction', label: 'Сфера', validators: [Validators.required], required: true },
        { key: 'goal', label: 'Цель проекта', validators: [Validators.required], required: true },
        { key: 'functionality', label: 'Функциональность', validators: [Validators.required], required: true },
        { key: 'customer', label: 'Заказчик', validators: [Validators.required], required: true },
      ]
    },
    { 
      key: 'participationProject', 
      label: 'Участие в проектах', 
      isGroup: true,
      fields: [
        { key: 'name', label: 'Название', validators: [Validators.required], required: true },
        { key: 'date', label: 'Дата', validators: [Validators.required], required: true },
      ]
    }
  ];

  constructor() {
    this.myForm = new FormGroup({});
    this.createFormControls(this.employeeFields, this.myForm);
  }

  ngOnInit(): void {
    this.populateForm<Employee>(this.employee, this.myForm, this.employeeFields);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) this.updateFormState();
  }

  private createFormControls(fields: FormField[], formGroup: FormGroup): void {
    fields.forEach(field => {
      const isDisabled = this.mode === FormMode.View;
      
      if (field.isGroup && field.fields) {
        const nestedGroup = new FormGroup({});
        this.createFormControls(field.fields, nestedGroup);
        formGroup.addControl(field.key, nestedGroup);
      } else {
        formGroup.addControl(
          field.key, 
          new FormControl({value: '', disabled: isDisabled}, field.validators)
        );
      }
    });
  }

  private populateForm<T>(data: T, formGroup: FormGroup, fields: FormField[]): void {
    fields.forEach(field => {
      if (field.isGroup && field.fields) {
        const nestedGroup = formGroup.get(field.key) as FormGroup;
        this.populateForm(data[field.key as keyof T] || {}, nestedGroup, field.fields);
      } else if (data[field.key as keyof T] !== undefined) {
        if (field.key === 'date' && Array.isArray(data[field.key as keyof T])) {
          const dateValues = data[field.key as keyof T] as unknown as string[];
          const dates = dateValues.map(d => new Date(d));
          formGroup.get(field.key)?.setValue(dates);
        } else {
          formGroup.get(field.key)?.setValue(data[field.key as keyof T]);
        }
      }
    });
  }

  hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    return control?.invalid && control?.touched || false;
  }

  private getControl(controlName: string): AbstractControl | null {
    if (controlName.includes('.')) {
      const [parent, child] = controlName.split('.');
      return this.myForm.get(parent)?.get(child) || null;
    }

    return this.myForm.get(controlName);
  }

  isVisibleSaveBtn(): boolean {
    return this.mode === FormMode.Edit || this.mode === FormMode.Create;
  }

  isViewMode(): boolean {
    return this.mode === FormMode.View;
  }

  isEditMode(): boolean {
    return this.mode === FormMode.Edit;
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

    const formValue = this.myForm.value;
    this.emitSubmit.emit({
      employee: formValue,
      project: formValue.project,
      participationProject: formValue.participationProject
    });
  }
}
