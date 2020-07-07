import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';
import {PhonebookState} from '../store';
import {DeleteItem, UpdateItem} from '../store/actions';
import {Contact} from '../../shared/interface/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  constructor(
    private store: Store<PhonebookState>,
    private dialogService: DialogService
  ) {}

  @Input() contact: Contact;

  public setItemFavorite() {
    this.store.dispatch(new UpdateItem(
      {id: this.contact.id, data: {...this.contact, favorite: !this.contact.favorite }})
    );
  }

  public openDialog(id: string) {
    this.dialogService.open(id);
  }

  public confirmDelete(event: boolean) {
    this.store.dispatch(new DeleteItem({id: this.contact.id}));
  }
}
