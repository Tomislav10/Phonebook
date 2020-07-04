import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { getFavoritePhonebookItems} from '../store/phonebook.selectors';
import {PhonebookState} from '../store/phonebook.reducers';

@Component({
  selector: 'app-favorite-items-list',
  templateUrl: './favorite-items-list.component.html',
  styleUrls: ['./favorite-items-list.component.scss']
})
export class FavoriteItemsListComponent {
  public favoritePhonebookItems$ = this.store.pipe(select(getFavoritePhonebookItems));

  constructor(private store: Store<PhonebookState>) {}
}
