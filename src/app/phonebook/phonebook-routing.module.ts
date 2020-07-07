import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhonebookComponent} from './phonebook.component';
import {PhonebookResolverService} from './phonebook-resolver.service';
import {CreateNewItemComponent} from './create-new-item/create-new-item.component';
import {AllContactsListComponent} from './all-contacts-list/all-contacts-list.component';
import {FavoriteItemsListComponent} from './favorite-items-list/favorite-items-list.component';
import {ViewItemComponent} from './view-item/view-item.component';

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
      path: 'view/:id',
      component: ViewItemComponent,
      resolve: {dataLoaded: PhonebookResolverService}
    },
    {
      path: 'edit/:id',
      data: {edit: true},
      component: CreateNewItemComponent
    },
    {
      path: 'create',
      data: {create: false},
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
