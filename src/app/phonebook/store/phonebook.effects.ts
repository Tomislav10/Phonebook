import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PhonebookActions} from './phonebook-action-types';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {
  ADD_ITEM_DETAILS,
  DELETE_ITEM_DETAILS, GET_ITEM_REQUEST_DETAILS,
  GetItemsSuccess,
  UPDATE_ITEM_REQUEST_DETAILS
} from './phonebook.actions';
import {PhonebookItem} from '../../shared/interface/phonebookItem';

@Injectable()
export class PhonebookEffects {

  // API endpoint
  private readonly getPhonebookItems = 'api/phonebookItems';

  constructor(private action$: Actions, private http: HttpClient) {}

  private getItems = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.GetItemsRequest>(GET_ITEM_REQUEST_DETAILS),
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
        return this.http.post(this.getPhonebookItems, action.payload.data)
          .pipe(
            map((data: PhonebookItem[]) => new PhonebookActions.GetItemsRequest)
          );
      })
    )
  );

  private deleteItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.DeleteItem>(DELETE_ITEM_DETAILS),
      switchMap((action) => {
        return this.http.delete(`${this.getPhonebookItems}/${action.payload.id}`)
          .pipe(
            map((data: PhonebookItem[]) => new PhonebookActions.GetItemsRequest)
          );
      })
    )
  );

  private updateItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.UpdateItem>(UPDATE_ITEM_REQUEST_DETAILS),
      switchMap((action) => {
        return this.http.put(`${this.getPhonebookItems}/${action.payload.id}`, action.payload.data)
          .pipe(
            map((data: PhonebookItem[]) => new PhonebookActions.GetItemsRequest)
          );
      })
    )
  );
}
