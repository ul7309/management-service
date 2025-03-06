import { Component, Input, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})

export class InputTextComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() key!: string;
  @Input() label!: string;
  @Input() error!: boolean;
  @Input() required!: boolean;

  formControl = new FormControl('');
  onChange: (value: string) => void = () => {
    // Intentionally left blank
  };
  onTouched: () => void = () => {
    // Intentionally left blank
  };
  private valueSubscription: Subscription;

  constructor() {
    this.valueSubscription = this.formControl.valueChanges.subscribe(value => {
      this.onChange(value || '');
    });
  }

  ngOnInit(): void {
    this.formControl.disable({ emitEvent: false });
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }

  writeValue(value: string | null | undefined): void {
    this.formControl.setValue(value || '', { emitEvent: false });
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable({ emitEvent: false });
    } else {
      this.formControl.enable({ emitEvent: false });
    }
  }
}