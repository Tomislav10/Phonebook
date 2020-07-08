import {Component, EventEmitter, forwardRef, Input, OnDestroy, Output} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {SharedService} from '../shared.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
export class InputFieldComponent implements OnDestroy, ControlValueAccessor, Validator {
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

  private unsubscribe$ = new Subject<void>();
  public readonly field: FormControl = new FormControl('', []);

  constructor(sharedService: SharedService) {
    sharedService.touch.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.field.markAsTouched();
    });
  }

  public writeValue(value: string | undefined): void {
    this.field.setValue(value || '');
  }

  public registerOnChange(fn: (v: string) => void): void {
    this.field.valueChanges.subscribe(fn);
  }

  public registerOnTouched(cb: () => void): void {
    this.blur.subscribe(cb);
  }

  public validate(): ValidationErrors | null {
    return this.field.valid ? null : {invalidForm: {valid: false}};
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

function isValidEmail(control: AbstractControl): ValidationErrors | null {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) || !control.value.length) {
    return null;
  }
  return {notValidEmail: true};
}
