import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextComponent } from '@shared/components/UI/input-text/input-text.component';

import { Project } from '../../models/projects.interface';
import { FormField } from '@shared/models/form-field.interface';
import { FormMode } from '@shared/models/form-mode.enum';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule, CommonModule, InputTextComponent, ButtonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})

export class ProjectFormComponent implements OnInit, OnChanges {
  @Input() project: Project = {} as Project;
  @Input() mode: FormMode = FormMode.Create;
  @Output() modeChange = new EventEmitter<FormMode>();
  @Output() emitSubmit = new EventEmitter<Project>();

  form: FormGroup;

  fields: FormField[] = [
    { key: 'label', label: 'Название проекта', validators: [Validators.required], required: true },
    { key: 'label_nda', label: 'Название под NDA', validators: [Validators.required], required: true },
    { key: 'description', label: 'Описание', validators: [Validators.required], required: true },
    { key: 'direction', label: 'Сфера', validators: [Validators.required], required: true },
    { key: 'goal', label: 'Цель проекта', validators: [Validators.required], required: true },
    { key: 'functionality', label: 'Функциональность', validators: [Validators.required], required: true },
    { key: 'customer', label: 'Заказчик', validators: [Validators.required], required: true },
  ];

  constructor() {
    this.form = new FormGroup({});

    this.fields.forEach(field => {
      const isDisabled = this.mode === FormMode.View;
      this.form.addControl(field.key, new FormControl({value: '', disabled: isDisabled}, field.validators));
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

  isViewMode(): boolean {
    return this.mode === FormMode.View;
  }

  isEditMode(): boolean {
    return this.mode === FormMode.Edit;
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

  changeMode(mode: FormMode) {
    this.modeChange.emit(mode);
  }

  change() {
    this.changeMode(FormMode.Edit);
  }

  onSubmitHandler() {
    this.changeMode(FormMode.View);
    this.emitSubmit.emit(this.project);
  }
}
