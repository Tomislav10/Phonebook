import {Component, EventEmitter, forwardRef, OnDestroy, Output} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {PhoneNumbers} from '../interface/contact';
import {SharedService} from '../shared.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
export class MultipleInputFieldsComponent implements OnDestroy, ControlValueAccessor, Validator {
  @Output()
  private readonly blur = new EventEmitter();

  private unsubscribe$ = new Subject<void>();
  public readonly form: FormArray = new FormArray([], [Validators.required]);

  constructor(sharedService: SharedService) {
    sharedService.touch.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.form.controls.forEach((data: FormGroup) => {
        data.controls.number.markAsTouched();
        data.controls.label.markAsTouched();
      });
    });
  }

  public writeValue(value: PhoneNumbers[] | undefined): void {
    const numberOfFilds = 3;
    if (value) {
      value.map(contact => {
        return this.form.push(
          new FormGroup({
            number: new FormControl(contact.number, [Validators.required, isValidPhoneNumber]),
            label: new FormControl(contact.label, [Validators.required])
          })
        );
      });
    } else {
      while (numberOfFilds !== this.form.length) {
        this.form.push(
          new FormGroup({
            number: new FormControl('', [Validators.required, isValidPhoneNumber]),
            label: new FormControl('', [Validators.required])
          })
        );
      }
    }
  }

  public registerOnChange(fn: (v: string) => void): void {
    this.form.valueChanges.subscribe(fn);
  }

  public registerOnTouched(cb: () => void): void {
    this.blur.subscribe(cb);
  }

  public removeContact(index: number): void {
    this.form.removeAt(index);
  }

  public addNewContact(): void {
    this.form.push(
      new FormGroup({
        number: new FormControl('', [Validators.required, isValidPhoneNumber]),
        label: new FormControl('', [Validators.required])
      })
    );
  }

  public validate(): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false}};
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


function isValidPhoneNumber(control: AbstractControl): ValidationErrors | null {
  if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(control.value) && control.value.length > 7) {
    return null;
  }
  return {notValidPhoneNumber: true};
}
