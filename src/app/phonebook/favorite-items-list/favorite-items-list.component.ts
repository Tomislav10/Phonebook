import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { getFavoritePhonebookItems} from '../store/phonebook.selectors';
import {PhonebookState} from '../store/phonebook.reducers';
import {NgForm} from '@angular/forms';
import {combineLatest, Observable, of} from 'rxjs';
import {PhonebookItem} from '../interface/phonebookItem';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-favorite-items-list',
  templateUrl: './favorite-items-list.component.html',
  styleUrls: ['./favorite-items-list.component.scss']
})
export class FavoriteItemsListComponent implements OnInit {
  @ViewChild('form') ngForm: NgForm;

  public readonly favoritePhonebookItems$ = this.store.pipe(select(getFavoritePhonebookItems));
  public filteredPhonebookItems$: Observable<PhonebookItem[]> = of([]);

  public searchField: string;

  constructor(private store: Store<PhonebookState>) {}

  ngOnInit() {
    this.filteredPhonebookItems$ = combineLatest([this.favoritePhonebookItems$, this.ngForm.form.valueChanges])
      .pipe(
        map(
          ([items, search]) => items.filter(data =>
            !search.searchField ? true : data.name.toLowerCase().includes(search.searchField.toLowerCase())
          )
        )
      );
  }
}
