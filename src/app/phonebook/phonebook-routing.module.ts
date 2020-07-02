import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonebookComponent} from './phonebook.component';

const routes: Routes = [
  {path: 'home', component: PhonebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule {
}
