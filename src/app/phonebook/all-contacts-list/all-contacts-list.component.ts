import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getAllPhonebookItems} from '../store/phonebook.selectors';
import {PhonebookState} from '../store/phonebook.reducers';

@Component({
  selector: 'app-all-contacts-list',
  templateUrl: './all-contacts-list.component.html',
  styleUrls: ['./all-contacts-list.component.scss']
})
export class AllContactsListComponent {
  public allPhonebookItems$ = this.store.pipe(select(getAllPhonebookItems));

  constructor(private store: Store<PhonebookState>) {}
}
