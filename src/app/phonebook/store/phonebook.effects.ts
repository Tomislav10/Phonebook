import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PhonebookActions} from './phonebook-action-types';
import {map, switchMap} from 'rxjs/operators';
import {PhonebookItem} from '../interface/phonebookItem';
import {HttpClient} from '@angular/common/http';
import {ADD_ITEM_DETAILS, AddItem, DELETE_ITEM_DETAILS, GetItemsSuccess, UPDATE_ITEM_DETAILS} from './phonebook.actions';

@Injectable()
export class PhonebookEffects {

  // API endpoint
  private readonly getPhonebookItems = 'api/phonebookItems';

  constructor(private action$: Actions, private http: HttpClient) {}

  private getItems = createEffect(
    () => this.action$.pipe(
      ofType(PhonebookActions.getItemsRequest),
      switchMap(() =>
        this.http.get<PhonebookItem[]>(this.getPhonebookItems)
          .pipe(
            map((data: PhonebookItem[]) => new GetItemsSuccess(data))
          )
      )
    )
  );

  private addItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.AddItem>(ADD_ITEM_DETAILS),
      switchMap((action) => {
        return this.http.post(this.getPhonebookItems, action.data)
          .pipe(
            map((data: PhonebookItem[]) => PhonebookActions.getItemsRequest)
          );
      })
    )
  );

  private deleteItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.DeleteItem>(DELETE_ITEM_DETAILS),
      switchMap((action) => {
        return this.http.delete(`this.getPhonebookItems/${action.id}`)
          .pipe(
            map((data: PhonebookItem[]) => PhonebookActions.getItemsRequest)
          );
      })
    )
  );

  private updateItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.UpdateItem>(UPDATE_ITEM_DETAILS),
      switchMap((action) => {
        return this.http.put(`this.getPhonebookItems/${action.id}`, action.data)
          .pipe(
            map((data: PhonebookItem[]) => PhonebookActions.getItemsRequest)
          );
      })
    )
  );
}
