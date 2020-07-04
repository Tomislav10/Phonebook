import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NgForm} from '@angular/forms';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {PhonebookState} from '../store';
import {Contact} from '../../shared/interface/contact';
import {getFavoriteContacts} from '../store/selector';

@Component({
  selector: 'app-favorite-contacts-list',
  templateUrl: './favorite-contacts-list.component.html',
  styleUrls: ['./favorite-contacts-list.component.scss']
})
export class FavoriteContactsListComponent implements OnInit {
  @ViewChild('form') ngForm: NgForm;

  public readonly favoriteContacts$ = this.store.pipe(select(getFavoriteContacts));
  public filteredContacts$: Observable<Contact[]> = of([]);

  public searchField: string;

  constructor(private store: Store<PhonebookState>) {}

  ngOnInit(): void {
    this.filteredContacts$ = combineLatest([this.favoriteContacts$, this.ngForm.form.valueChanges])
      .pipe(
        map(
          ([items, search]) => items.filter(data =>
            !search.searchField ? true : data.name.toLowerCase().includes(search.searchField.toLowerCase())
          )
        )
      );
  }
}
