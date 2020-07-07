import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';
import {PhonebookItem} from '../../shared/interface/phonebookItem';
import {DeleteItem, UpdateItem} from '../store/phonebook.actions';
import {PhonebookState} from '../store/phonebook.reducers';

@Component({
  selector: 'app-phonebook-list-item',
  templateUrl: './phonebook-list-item.component.html',
  styleUrls: ['./phonebook-list-item.component.scss']
})
export class PhonebookListItemComponent {
  constructor(
    private store: Store<PhonebookState>,
    private dialogService: DialogService
  ) {}

  @Input() item: PhonebookItem;

  public setItemFavorite() {
    this.store.dispatch(new UpdateItem(
      {id: this.item.id, data: {...this.item, favorite: !this.item.favorite }})
    );
  }

  public openDialog(id: string) {
    console.log(id);
    this.dialogService.open(id);
  }

  public confirmDelete(event: boolean) {
    this.store.dispatch(new DeleteItem({id: this.item.id}));
  }
}
