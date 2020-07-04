import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonebookComponent} from './phonebook.component';
import {PhonebookResolverService} from './phonebook-resolver.service';
import {CreateNewItemComponent} from './create-new-item/create-new-item.component';
import {AllContactsListComponent} from './all-contacts-list/all-contacts-list.component';
import {FavoriteItemsListComponent} from './favorite-items-list/favorite-items-list.component';

const routes: Routes = [
    {
      path: 'phonebook',
      component: PhonebookComponent,
      resolve: {dataLoaded: PhonebookResolverService},
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'all-contacts'},
        {
          path: 'all-contacts',
          component: AllContactsListComponent
        },
        {
          path: 'my-favorites',
          component: FavoriteItemsListComponent
        }
      ]
    },
    {
      path: 'create',
      component: CreateNewItemComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhonebookRoutingModule {
}
