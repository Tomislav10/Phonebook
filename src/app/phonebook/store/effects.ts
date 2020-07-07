import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {PhonebookActions} from './action-types';
import {ADD_ITEM, DELETE_ITEM, GET_ITEM_REQUEST, GET_ITEMS_LIST_REQUEST, GetItemsListSuccess, UPDATE_ITEM} from './actions';
import {Contact} from '../../shared/interface/contact';

@Injectable()
export class Effects {

  // API endpoint
  private readonly apiEndpoint = 'api/phonebookItems';

  constructor(private action$: Actions, private http: HttpClient) {}

  private getItemsList = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.GetItemsListRequest>(GET_ITEMS_LIST_REQUEST),
      switchMap(() =>
        this.http.get<Contact[]>(this.apiEndpoint)
          .pipe(
            map((data: Contact[]) => new GetItemsListSuccess(data))
          )
      )
    )
  );

  private getItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.GetItemRequest>(GET_ITEM_REQUEST),
      switchMap((action) => {
        return this.http.get(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Contact) => new PhonebookActions.GetItemSuccess(data))
          );
      })
    )
  );

  private addItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.AddItem>(ADD_ITEM),
      switchMap((action) => {
        return this.http.post(this.apiEndpoint, action.payload.data)
          .pipe(
            map((data: Contact[]) => new PhonebookActions.GetItemsListRequest)
          );
      })
    )
  );

  private deleteItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.DeleteItem>(DELETE_ITEM),
      switchMap((action) => {
        return this.http.delete(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Contact[]) => new PhonebookActions.GetItemsListRequest)
          );
      })
    )
  );

  private updateItem = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.UpdateItem>(UPDATE_ITEM),
      switchMap((action) => {
        return this.http.put(`${this.apiEndpoint}/${action.payload.id}`, action.payload.data)
          .pipe(
            mergeMap((data: Contact[]) => [
              new PhonebookActions.GetItemRequest({id: (action.payload.id).toString()}),
              new PhonebookActions.GetItemsListRequest
            ])
          );
      })
    )
  );
}
