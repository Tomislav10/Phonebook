import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PhonebookComponent} from './phonebook.component';

@NgModule({
  declarations: [
    PhonebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PhonebookComponent]
})
export class PhonebookModule {}
