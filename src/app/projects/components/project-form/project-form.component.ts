import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { Project, FormField, FormMode } from '../../models/projects.interface';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule, CommonModule, InputTextModule, ButtonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})

export class ProjectFormComponent implements OnInit, OnChanges {
  @Input() project: Project = {} as Project;
  @Input() mode: FormMode = FormMode.Create;
  @Output() modeChange = new EventEmitter<FormMode>();

  form: FormGroup;
  FormMode = FormMode;

  fields: FormField[] = [
    { key: 'label', label: 'Название проекта', validators: [Validators.required], required: true },
    { key: 'label_nda', label: 'Название под NDA', validators: [Validators.required], required: true },
    { key: 'description', label: 'Описание', validators: [Validators.required], required: true },
    { key: 'direction', label: 'Сфера', validators: [Validators.required], required: true },
    { key: 'goal', label: 'Цель проекта', validators: [Validators.required], required: true },
    { key: 'functionality', label: 'Функциональность', validators: [Validators.required], required: true },
    { key: 'сustomer', label: 'Заказчик', validators: [Validators.required], required: true },
  ];

  constructor() {
    this.form = new FormGroup({});

    this.fields.forEach(field => {
      this.form.addControl(field.key, new FormControl('', field.validators));
    });
  }

  ngOnInit(): void {
    this.populateForm(this.project);

    this.form.valueChanges.subscribe(values => {
      const updatedProject: Project = { ...this.project, ...values };
      this.project = updatedProject;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mode']) this.updateFormState();
  }

  hasError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

  isVisibleSaveBtn(): boolean {
    return this.mode === FormMode.Edit || this.mode === FormMode.Create
  }

  populateForm(project: Project): void {
    Object.keys(this.form.controls).forEach(key => {
        const projectKey = key as keyof Project; 
        if (project[projectKey] !== undefined) this.form.controls[key].setValue(project[projectKey]);
    });
  }

  updateFormState(): void {
    if (this.mode === FormMode.View) {
      this.form.disable();
    } else {
      this.form.enable();
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
    console.log('project', this.project);
    this.setMode(FormMode.View);
  }
}
