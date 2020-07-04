import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonebookComponent} from './phonebook.component';
import {PhonebookResolverService} from './phonebook-resolver.service';

const routes: Routes = [
  {path: 'home', resolve: { dataLoaded: PhonebookResolverService }, component: PhonebookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule {
}
