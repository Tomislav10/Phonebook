import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {PhonebookState} from '../store/phonebook.reducers';
import {getAllPhonebookItems} from '../store/phonebook.selectors';
import {UpdateItem} from '../store/phonebook.actions';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent {

  public itemDetails$;
  private itemId: string;

  constructor(
    private store: Store<PhonebookState>,
    private router: Router,
  ) {
    this.itemId = (router.url.substr(router.url.lastIndexOf('/') + 1));
    this.itemDetails$ = this.store.select(getAllPhonebookItems)
      .pipe(map(items => items.filter(item => item.id.toString() === this.itemId).pop()));
  }

  public setItemFavorite(itemDetails) {
    this.store.dispatch(new UpdateItem(
      {id: itemDetails.id, data: {...itemDetails, favorite: !itemDetails.favorite }})
    );
  }
}
