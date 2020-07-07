import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {PhonebookState} from '../store/phonebook.reducers';
import {ActivatedRoute, Data} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss']
})
export class CreateNewItemComponent {

  public contactItemForm: FormGroup;

  public mode: { edit?: boolean, create?: boolean };

  constructor(
    private store: Store<PhonebookState>,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe(
      (data: Data) => {
        this.mode = data;
      }
    );
    this.setForm();
  }

  private setForm(): void {
    this.contactItemForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, []),
      contacts: new FormControl([{type: 'home1', number: '+3851111111'}, {type: 'home1', number: '+3851111111'}, {type: 'home2', number: '+3851111111'}], [])
    });
  }

  aaa() {
    console.log(this.contactItemForm.value);
  }
}
