import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {PhonebookModule} from './phonebook/phonebook.module';
import {PhonebookRoutingModule} from './phonebook/phonebook-routing.module';
import {MockServerModule} from './mock-server/mock-server.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    PhonebookModule,
    MockServerModule,
    PhonebookRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
