import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getAllPhonebookItems} from '../store/phonebook.selectors';
import {PhonebookState} from '../store/phonebook.reducers';
import {DialogService} from '../../shared/confiramtion-dialog/dialog.service';

@Component({
  selector: 'app-all-contacts-list',
  templateUrl: './all-contacts-list.component.html',
  styleUrls: ['./all-contacts-list.component.scss']
})
export class AllContactsListComponent {
  public allPhonebookItems$ = this.store.pipe(select(getAllPhonebookItems));

  constructor(
    private store: Store<PhonebookState>,
    private dialogService: DialogService
  ) {}

  openDialogUpload(id: string) {
    console.log(id);
    this.dialogService.open(id);
  }
}
