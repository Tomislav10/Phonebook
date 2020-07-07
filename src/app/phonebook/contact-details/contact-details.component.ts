import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PhonebookState} from '../store';
import {UpdateItem} from '../store/actions';
import {getCurrentContact} from '../store/selector';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  public contact$ = this.store.pipe(select(getCurrentContact));

  constructor(
    private store: Store<PhonebookState>,
  ) {}

  public setItemFavorite(contact) {
    this.store.dispatch(new UpdateItem(
      {id: contact.id, data: {...contact, favorite: !contact.favorite }})
    );
  }
}
