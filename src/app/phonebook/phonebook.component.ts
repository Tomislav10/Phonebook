import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PhonebookState} from './store/phonebook.reducers';
import {getAllPhonebookItems} from './store/phonebook.selectors';
import {map} from 'rxjs/operators';
import {PhonebookItem} from './interface/phonebookItem';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent {
  public allPhonebookItems$ = this.store.pipe(select(getAllPhonebookItems));
  public favoritePhonebookItems$ = this.allPhonebookItems$.pipe(map((items: PhonebookItem[]) => items.filter((item) => item.favorite)));

  public listType: 'All contacts' | 'My favorites' = 'All contacts';

  constructor(private store: Store<PhonebookState>) {}
}
