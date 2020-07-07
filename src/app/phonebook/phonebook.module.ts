import {NgModule} from '@angular/core';
import {PhonebookComponent} from './phonebook.component';
import {HttpClientModule} from '@angular/common/http';
import {PhonebookListItemComponent} from './phonebook-list-item/phonebook-list-item.component';
import {CommonModule} from '@angular/common';
import {PhonebookRoutingModule} from './phonebook-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PhonebookResolverService} from './phonebook-resolver.service';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {CreateNewItemComponent} from './create-new-item/create-new-item.component';
import {AllContactsListComponent} from './all-contacts-list/all-contacts-list.component';
import {FavoriteItemsListComponent} from './favorite-items-list/favorite-items-list.component';
import {ViewItemComponent} from './view-item/view-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {phonebookReducer} from './store/phonebook.reducers';
import {PhonebookEffects} from './store/phonebook.effects';


@NgModule({
  declarations: [
    AllContactsListComponent,
    FavoriteItemsListComponent,
    PhonebookComponent,
    PhonebookListItemComponent,
    AddNewItemComponent,
    CreateNewItemComponent,
    ViewItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    PhonebookRoutingModule,
    StoreModule.forFeature('phonebookState', phonebookReducer),
    EffectsModule.forFeature([PhonebookEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PhonebookResolverService],
  bootstrap: [PhonebookComponent]
})
export class PhonebookModule {}
