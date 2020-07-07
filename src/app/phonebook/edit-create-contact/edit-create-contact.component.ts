import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Data} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {getCurrentItem, PhonebookState} from '../store';
import {AddItem} from '../store/actions';
import {PhonebookItem} from '../../shared/interface/phonebookItem';

@Component({
  selector: 'app-edit-create-contact',
  templateUrl: './edit-create-contact.component.html',
  styleUrls: ['./edit-create-contact.component.scss']
})
export class EditCreateContactComponent implements OnInit {

  public contactItemForm: FormGroup;

  public currentContact$ = this.store.pipe(select(getCurrentItem));
  public mode: { edit?: boolean, create?: boolean };
  private currentConntact?: PhonebookItem;

  constructor(
    private store: Store<PhonebookState>,
    private activeRoute: ActivatedRoute
  ) {
    activeRoute.data.subscribe((data: Data) => this.mode = data);
    this.setForm();
  }

  ngOnInit(): void {
    if (this.mode.edit) {
      this.currentContact$.subscribe(data => {
        this.contactItemForm.setValue({name: data.name, email: data.email, contacts: data.contacts});
        this.currentConntact = data;
      });
    }
  }

  public submitForm() {
    this.store.dispatch(new AddItem({data: {...this.currentConntact, ...this.contactItemForm.value}}));
    console.log('submit');
  }

  private setForm(): void {
    this.contactItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      contacts: new FormControl('', [])
    });
  }
}
