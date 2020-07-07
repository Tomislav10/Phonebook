import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor, Validator {
  @Output()
  private readonly blur = new EventEmitter();

  @Input() public label: string;

  @Input()
  public set required(value: boolean) {
    if (value) {
      this.field.setValidators([Validators.required]);
    }
  }

  @Input()
  public set email(value: boolean) {
    if (value) {
      this.field.setValidators([isValidEmail]);
    }
  }

  @Input() public imgSrc: string;

  public readonly field: FormControl = new FormControl('', []);

  constructor(private readonly controlContainer: ControlContainer) {
  }

  public writeValue(value: string | undefined) {
    this.field.setValue(value || '');
    if (this.controlContainer.control) {
      this.controlContainer.control.markAsPristine();
    }
  }

  public registerOnChange(fn: (v: string) => void) {
    this.field.valueChanges.subscribe(fn);
  }

  public registerOnTouched(cb: () => void): void {
    this.blur.subscribe(cb);
  }

  public validate(): ValidationErrors | null {
    if (this.field.valid) {
      // tslint:disable-next-line:no-null-keyword
      return null;
    } else {
      return {
        invalidForm: { valid: false, message: 'Redirect uris fields are invalid' }
      };
    }
  }
}

function isValidEmail(control: AbstractControl): ValidationErrors | null {
  console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value));
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
    // eslint-disable-next-line no-null/no-null
    return null;
  }
  return {notValidEmail: true};
}
