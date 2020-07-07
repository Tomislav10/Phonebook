import {Component, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NgForm} from '@angular/forms';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {getAllPhonebookItems, PhonebookState} from '../store';
import {Contact} from '../../shared/interface/contact';

@Component({
  selector: 'app-all-contacts-list',
  templateUrl: './all-contacts-list.component.html',
  styleUrls: ['./all-contacts-list.component.scss']
})
export class AllContactsListComponent implements OnInit {
  @ViewChild('form') ngForm: NgForm;

  private readonly allPhonebookItems$ = this.store.pipe(select(getAllPhonebookItems));
  public filteredPhonebookItems$: Observable<Contact[]> = of([]);

  public searchField: string;

  constructor(private store: Store<PhonebookState>) {}

  ngOnInit() {
    this.filteredPhonebookItems$ = combineLatest([this.allPhonebookItems$, this.ngForm.form.valueChanges])
      .pipe(
        map(
          ([items, search]) => items.filter(data =>
            !search.searchField ? true : data.name.toLowerCase().includes(search.searchField.toLowerCase())
          )
        )
      );
  }
}
