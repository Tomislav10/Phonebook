import {Component} from '@angular/core';
import {PhonebookService} from './service/phonebook.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  providers: [PhonebookService]
})
export class PhonebookComponent {
  constructor(private phonebookService: PhonebookService) {
    phonebookService.getItems().subscribe(data => {
      console.log(data);
    });
  }
}
