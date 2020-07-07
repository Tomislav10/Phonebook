import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonebookComponent} from './phonebook.component';
import {AllContactsListComponent} from './all-contacts-list/all-contacts-list.component';
import {ContactListResolverService} from './resolvers/contact-list-resolver.service';
import {ContactItemResolverService} from './resolvers/contact-item-resolver.service';
import {EditCreateContactComponent} from './edit-create-contact/edit-create-contact.component';
import {FavoriteContactsListComponent} from './favorite-contacts-list/favorite-contacts-list.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

const routes: Routes = [
    {
      path: 'phonebook',
      component: PhonebookComponent,
      resolve: {dataLoaded: ContactListResolverService},
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'all-contacts'},
        {
          path: 'all-contacts',
          component: AllContactsListComponent
        },
        {
          path: 'my-favorites',
          component: FavoriteContactsListComponent
        }
      ]
    },
    {
      path: 'view/:id',
      resolve: {dataLoaded: ContactItemResolverService},
      component: ContactDetailsComponent
    },
    {
      path: 'edit/:id',
      resolve: {dataLoaded: ContactItemResolverService},
      data: {edit: true},
      component: EditCreateContactComponent
    },
    {
      path: 'create',
      data: {create: false},
      component: EditCreateContactComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule {
}
