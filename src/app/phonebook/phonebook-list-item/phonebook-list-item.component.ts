import {Component, Input} from '@angular/core';
import {PhonebookItem} from '../interface/phonebookItem';

@Component({
  selector: 'app-phonebook-list-item',
  templateUrl: './phonebook-list-item.component.html',
  styleUrls: ['./phonebook-list-item.component.scss']
})
export class PhonebookListItemComponent {
  @Input() item: PhonebookItem;
}
