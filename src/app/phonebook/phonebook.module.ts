import {NgModule} from '@angular/core';
import {PhonebookComponent} from './phonebook.component';
import {HttpClientModule} from '@angular/common/http';
import {PhonebookListItemComponent} from './phonebook-list-item/phonebook-list-item.component';
import {CommonModule} from '@angular/common';
import {PhonebookRoutingModule} from './phonebook-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PhonebookEffects} from './store/phonebook.effects';
import {phonebookReducer} from './store/phonebook.reducers';
import {PhonebookResolverService} from './phonebook-resolver.service';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';

@NgModule({
  declarations: [
    PhonebookComponent,
    PhonebookListItemComponent,
    AddNewItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    PhonebookRoutingModule,
    StoreModule.forFeature('phonebookState', phonebookReducer),
    EffectsModule.forFeature([PhonebookEffects])
  ],
  providers: [PhonebookResolverService],
  bootstrap: [PhonebookComponent]
})
export class PhonebookModule {}
