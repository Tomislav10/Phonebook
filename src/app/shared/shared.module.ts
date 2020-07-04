import {NgModule} from '@angular/core';
import {HeaderComponent} from './layout/header.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {MultipleInputFieldsComponent} from './multiple-input-fields/multiple-input-fields.component';
import {ConfirmationDialogComponent} from './confiramtion-dialog/confirmation-dialog.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, InputFieldComponent, MultipleInputFieldsComponent, ConfirmationDialogComponent],
  exports: [HeaderComponent, InputFieldComponent, MultipleInputFieldsComponent, ConfirmationDialogComponent]
})
export class SharedModule {}
