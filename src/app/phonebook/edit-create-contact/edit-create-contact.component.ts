import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {getCurrentItem, PhonebookState} from '../store';
import {AddItem, DeleteItem} from '../store/actions';
import {Contact} from '../../shared/interface/contact';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';

@Component({
  selector: 'app-edit-create-contact',
  templateUrl: './edit-create-contact.component.html',
  styleUrls: ['./edit-create-contact.component.scss']
})
export class EditCreateContactComponent implements OnInit {

  public contactItemForm: FormGroup;
  public image;

  public currentContact$ = this.store.pipe(select(getCurrentItem));
  public mode: { edit?: boolean, create?: boolean };
  private currentConntact?: Contact;

  constructor(
    private store: Store<PhonebookState>,
    private activeRoute: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router
  ) {
    activeRoute.data.subscribe((data: Data) => this.mode = data);
    this.setForm();
  }

  ngOnInit(): void {
    if (this.mode.edit) {
      this.currentContact$.subscribe(data => {
        this.contactItemForm.setValue({name: data.name, email: data.email, contacts: data.contacts});
        this.currentConntact = data;
        this.image = data.img;
      });
    }
  }

  public submitForm() {
    this.store.dispatch(new AddItem({data: {...this.currentConntact, ...this.contactItemForm.value, img: this.image }}));
    this.router.navigate([this.mode.create ? '../' : '../../']);
  }

  private setForm(): void {
    this.contactItemForm = new FormGroup({
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
    this.store.dispatch(new DeleteItem({id: this.currentConntact.id}));
    this.router.navigate(['../../']);
  }
}
