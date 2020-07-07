import {Component, EventEmitter, forwardRef, Output} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormArray,
  FormControl, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {PhoneNumbers} from '../interface/contact';

@Component({
  selector: 'app-multiple-input-fields',
  templateUrl: './multiple-input-fields.component.html',
  styleUrls: ['./multiple-input-fields.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleInputFieldsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MultipleInputFieldsComponent),
      multi: true
    }
  ]
})
export class MultipleInputFieldsComponent implements ControlValueAccessor, Validator {
  @Output()
  private readonly blur = new EventEmitter();

  public readonly form: FormArray = new FormArray([], [Validators.required]);

  constructor(private readonly controlContainer: ControlContainer) {
  }

  public writeValue(value: PhoneNumbers[] | undefined) {
    const arr: AbstractControl[] = [];
    if (value) {
      value.map(contact => {
        return arr.push(
          new FormGroup({
            number: new FormControl(contact.number, [Validators.required]),
            label: new FormControl(contact.label, [Validators.required])
          })
        );
      });
    } else {
      arr.push(
        new FormGroup({
          number: new FormControl('', [Validators.required]),
          label: new FormControl('', [Validators.required])
        })
      );
    }

    while (this.form.length !== 0) {
      this.form.removeAt(0);
    }

    if (arr && arr.length) {
      arr.forEach(c => this.form.push(c));
    }
  }

  public registerOnChange(fn: (v: string) => void) {
    this.form.valueChanges.subscribe(fn);
  }

  public registerOnTouched(cb: () => void): void {
    this.blur.subscribe(cb);
  }

  public removeContact(index: number) {
    this.form.removeAt(index);
  }

  public addNewContact() {
    this.form.push(
      new FormGroup({
        number: new FormControl('', [Validators.required, Validators.maxLength(12)]),
        label: new FormControl('', [Validators.required, Validators.maxLength(8)])
      })
    );
  }

  public validate(): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: { valid: false }};
  }
}
