import {Component} from '@angular/core';
import {PhonebookService} from './service/phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss'],
  providers: [PhonebookService]
})
export class PhonebookComponent {
  constructor(private phonebookService: PhonebookService) {
    phonebookService.getItems().subscribe(data => {
      console.log(data);
    });
  }
}
