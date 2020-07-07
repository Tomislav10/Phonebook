import {NgModule} from '@angular/core';
import {PhonebookComponent} from './phonebook.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {PhonebookRoutingModule} from './phonebook-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {AllContactsListComponent} from './all-contacts-list/all-contacts-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactListResolverService} from './resolvers/contact-list-resolver.service';
import {Effects, phonebookReducer} from './store';
import {ContactItemResolverService} from './resolvers/contact-item-resolver.service';
import {EditCreateContactComponent} from './edit-create-contact/edit-create-contact.component';
import {FavoriteContactsListComponent} from './favorite-contacts-list/favorite-contacts-list.component';
import {ContactItemComponent} from './contact-item/contact-item.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';


@NgModule({
  declarations: [
    AllContactsListComponent,
    FavoriteContactsListComponent,
    PhonebookComponent,
    ContactItemComponent,
    AddNewItemComponent,
    EditCreateContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    PhonebookRoutingModule,
    StoreModule.forFeature('phonebookState', phonebookReducer),
    EffectsModule.forFeature([Effects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactListResolverService, ContactItemResolverService],
  bootstrap: [PhonebookComponent]
})
export class PhonebookModule {}
