import {Component, Input} from '@angular/core';
import {PhonebookItem} from '../interface/phonebookItem';
import {Store} from '@ngrx/store';
import {PhonebookState} from '../store/phonebook.reducers';
import {PhonebookActions} from '../store/phonebook-action-types';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';
import {DeleteItem} from '../store/phonebook.actions';

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
    this.store.dispatch(new PhonebookActions.UpdateItem(
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
