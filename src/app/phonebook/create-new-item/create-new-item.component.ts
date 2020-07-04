import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {PhonebookState} from '../store/phonebook.reducers';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss']
})
export class CreateNewItemComponent {
  constructor(private store: Store<PhonebookState>) {}
}
