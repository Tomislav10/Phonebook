import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PhonebookState} from './store/phonebook.reducers';
import {getAllPhonebookItems} from './store/phonebook.selectors';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent {
  public phonebookItems$ = this.store.pipe(select(getAllPhonebookItems));

  constructor(private store: Store<PhonebookState>) {
    this.phonebookItems$.subscribe(data => {
      console.log(data);
    });
  }
}
