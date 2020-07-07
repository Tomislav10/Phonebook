import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PhonebookState} from '../store';
import {CreateItem, DeleteItem, GetItemsListRequest} from '../store/actions';
import {Contact} from '../../shared/interface/contact';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';
import {getAllContacts, getCurrentContact} from '../store/selector';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-edit-create-contact',
  templateUrl: './edit-create-contact.component.html',
  styleUrls: ['./edit-create-contact.component.scss']
})
export class EditCreateContactComponent implements OnInit {

  public contactForm: FormGroup;
  public image;

  private readonly currentContact$ = this.store.pipe(select(getCurrentContact));
  private readonly allContacts$ = this.store.pipe(select(getAllContacts));
  public mode: { edit?: boolean, create?: boolean };
  private currentContact?: Contact;
  private redirectId?: string;

  constructor(
    private store: Store<PhonebookState>,
    private activeRoute: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router
  ) {
    activeRoute.data.subscribe((data: Data) => this.mode = data);
    this.store.dispatch(new GetItemsListRequest);
    this.setForm();
  }

  ngOnInit(): void {
      combineLatest([this.currentContact$, this.allContacts$]).subscribe(([contact, allContacts]) => {
        if (this.mode.edit && contact) {
          this.contactForm.setValue({name: contact.name, email: contact.email, contacts: contact.contacts});
          this.currentContact = contact;
          this.image = contact.img;
          this.redirectId = contact.id;
        } else {
          this.redirectId = allContacts && allContacts.length + 1;
          console.log(allContacts);
          console.log(this.redirectId);
        }
      });
  }

  public submitForm() {
    this.store.dispatch(
      new CreateItem(
        {data: {...this.currentContact, ...this.contactForm.value, img: this.image }, redirectId: this.redirectId}
        )
    );
  }

  private setForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      contacts: new FormControl('', [])
    });
  }

  public updateProfilePhoto(event: Event) {
    const file = event.target['files'][0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = (reader.result);
    };
  }

  public openDialog(id: string) {
    this.dialogService.open(id);
  }

  public confirmDelete(event: boolean) {
    this.store.dispatch(new DeleteItem({id: this.currentContact.id}));
    this.router.navigate(['../../']);
  }
}
