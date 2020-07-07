import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PhonebookState} from '../store';
import {CreateItem, DeleteItem} from '../store/actions';
import {Contact} from '../../shared/interface/contact';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';
import {getAllContacts, getCurrentContact} from '../store/selector';
import {SharedService} from '../../shared/shared.service';

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
  private redirectId?: number;

  constructor(
    private store: Store<PhonebookState>,
    private activeRoute: ActivatedRoute,
    private dialogService: DialogService,
    private sharedService: SharedService,
    private router: Router
  ) {
    activeRoute.data.subscribe((data: Data) => this.mode = data);
    this.setForm();
  }

  ngOnInit(): void {
    if (this.mode.edit) {
      this.currentContact$.subscribe((contact) => {
        console.log('../../')
        this.contactForm.setValue({name: contact.name, email: contact.email, contacts: contact.contacts});
        this.currentContact = contact;
        this.image = contact.img;
        this.redirectId = contact.id;
      });
    } else {
      this.redirectId = Math.floor(Date.now() / 1000);
    }
  }

  public submitForm() {
    this.sharedService.touch.next(true);
    const id = this.redirectId ? this.redirectId : this.currentContact.id;
    if (this.contactForm.valid) {
      this.store.dispatch(
        new CreateItem(
          {data: {...this.currentContact, ...this.contactForm.value, img: this.image, id }}
        )
      );
    }
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
