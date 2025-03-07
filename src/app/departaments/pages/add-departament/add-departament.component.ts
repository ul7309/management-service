import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LayoutComponent } from '@layout/layout.component';

@Component({
  selector: 'app-add-departament',
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule, LayoutComponent],
  templateUrl: './add-departament.component.html',
  styleUrl: './add-departament.component.scss'
})

export class AddDepartamentComponent {
  departamentForm = new FormGroup({
    departament: new FormControl(''),
  });

  submit() {
    console.log('submit');
  }
}
