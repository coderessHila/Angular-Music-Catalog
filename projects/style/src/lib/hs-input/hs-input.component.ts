import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidatorFn} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'hs-input',
  templateUrl: './hs-input.component.html',
  styleUrls: ['./hs-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: HsInputComponent
    }
  ]
})
export class HsInputComponent implements OnInit, ControlValueAccessor, OnDestroy {
  formControl = new FormControl();

  private onDestroy$ = new Subject<void>();

  error = {
    email: 'Please enter a valid email address',
    required: 'Value is required',
    phone: 'Please enter a valid phone number(XXX-XXXXXXXX)',
    minLength: 'min length is'
  }

  @Input() label!: string;
  @Input() hint!: string;
  @Input() name!: string;
  @Input() type = 'text';
  @Input() placeholder!: string;
  // MatFormFieldAppearance = 'legacy' | 'standard' | 'fill' | 'outline';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  // Provides a set of built-in validators that can be used by form controls.
  @Input() validators: ValidatorFn[] = []
  @Input() customErrorCondition?: boolean;
  // for example - this.formControl.hasError('email') && !this.formControl.hasError('required')
  @Input() customErrorMessage: string = this.error.required;
  @Input() textColor = "inherit";

  constructor() { }
  // public valueChanges$:Observable<string> = this.formControl.valueChanges.pipe(tap(value => this.onChange(value)));


  onChange = (value: any) => {
  };

  writeValue(obj: any): void {
    console.log("write value")
        this.formControl.setValue(obj)
    }


    registerOnChange(fn: any): void {
      console.log("registerOnChange")
        // corrected mistake! this.onChange(fn) - wtf Hila??
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {

    }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  ngOnInit(): void {
    this.setValidators();
    this.registerFormChanges();
  }

  private registerFormChanges() {
    this.formControl.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(value => {
        this.onChange(value)
      }
    )

  }

  private setValidators() {
    if(this.validators?.length){
      this.formControl.setValidators(this.validators);
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }
}
