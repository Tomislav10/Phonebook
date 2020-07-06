import {NgModule} from '@angular/core';
import {HeaderComponent} from './layout/header.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {MultipleInputFieldsComponent} from './multiple-input-fields/multiple-input-fields.component';

@NgModule({
  imports: [],
  declarations: [HeaderComponent, InputFieldComponent, MultipleInputFieldsComponent],
  exports: [HeaderComponent, InputFieldComponent, MultipleInputFieldsComponent]
})
export class SharedModule {}
