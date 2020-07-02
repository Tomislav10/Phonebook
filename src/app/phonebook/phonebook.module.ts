import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PhonebookComponent} from './phonebook.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PhonebookComponent]
})
export class PhonebookModule {}
