import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getCurrentItem, PhonebookState} from '../store';
import {UpdateItem} from '../store/actions';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {

  public contact$ = this.store.pipe(select(getCurrentItem));

  constructor(
    private store: Store<PhonebookState>,
  ) {}

  public setItemFavorite(contact) {
    console.log(contact.id);
    this.store.dispatch(new UpdateItem(
      {id: contact.id, data: {...contact, favorite: !contact.favorite }})
    );
  }
}
