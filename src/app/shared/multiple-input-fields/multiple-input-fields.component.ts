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
import {PhoneNumbers} from '../interface/phonebookItem';

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

  public writeValue(redirectUris: PhoneNumbers[] | undefined) {
    const arr: AbstractControl[] = [];
    if (redirectUris) {
      redirectUris.map(contact => {
        return arr.push(
          new FormGroup({
            number: new FormControl(contact.type, [Validators.required]),
            cell: new FormControl(contact.number, [Validators.required])
          })
          );
      });
    }

    while (this.form.length !== 0) {
      this.form.removeAt(0);
    }

    if (arr && arr.length) {
      arr.forEach(c => this.form.push(c));
    }

    if (this.controlContainer.control) {
      this.controlContainer.control.markAsPristine();
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
        number: new FormControl('', [Validators.required]),
        cell: new FormControl('', [Validators.required])
      })
    );
  }

  public validate(): ValidationErrors | null {
    if (this.form.valid) {
      // tslint:disable-next-line:no-null-keyword
      return null;
    } else {
      return {
        invalidForm: { valid: false, message: 'Redirect uris fields are invalid' }
      };
    }
  }
}
