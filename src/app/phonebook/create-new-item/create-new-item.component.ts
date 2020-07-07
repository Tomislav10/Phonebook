import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {getAllPhonebookItems} from '../store/phonebook.selectors';
import {PhonebookState} from '../store/phonebook.reducers';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss']
})
export class CreateNewItemComponent implements OnInit {

  public contactItemForm: FormGroup;

  public itemDetails;
  public da = this.store.select(getAllPhonebookItems).pipe(map(items => items.filter(item => item.id.toString() === this.itemId).pop()));
  public mode: { edit?: boolean, create?: boolean };
  private itemId: string;

  constructor(
    private store: Store<PhonebookState>,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    activeRoute.data.subscribe((data: Data) => this.mode = data);
    this.setForm();
  }

  ngOnInit(): void {
    if (this.mode.edit) {
      this.itemId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
      this.itemDetails = this.store.select(getAllPhonebookItems).pipe(map(items => items.filter(item => item.id.toString() === this.itemId).pop()))
        .subscribe(data => {
          console.log(data);
          console.log(this.contactItemForm);
          this.contactItemForm.setValue({name: data.name, email: data.email, contacts: data.contacts});
          this.itemDetails = data;
        });
    }
  }

  aaa() {
    console.log(this.contactItemForm.value);
  }

  private setForm(): void {
    this.contactItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('email', []),
      contacts: new FormControl('', [])
    });
  }
}
