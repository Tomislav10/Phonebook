import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PhonebookActions} from './action-types';
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT_REQUEST,
  GET_CONTACTS_LIST_REQUEST,
  GetItemsListSuccess, REDIRECT_TO_VIEW,
  UPDATE_CONTACT
} from './actions';
import {Contact} from '../../shared/interface/contact';
import {Router} from '@angular/router';
import {of} from 'rxjs';

@Injectable()
export class Effects {

  // API endpoint
  private readonly apiEndpoint = 'api/phonebookItems';

  constructor(private action$: Actions, private http: HttpClient, private router: Router) {}

  private redirectToView = createEffect(
    () => this.action$.pipe(
        ofType<PhonebookActions.RedirectToView>(REDIRECT_TO_VIEW),
        tap(action => this.router.navigate([action.payload.redirectPath]))
      ), { dispatch: false }
    );

  private getContactList = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.GetItemsListRequest>(GET_CONTACTS_LIST_REQUEST),
      switchMap(() =>
        this.http.get<Contact[]>(this.apiEndpoint)
          .pipe(
            map((data: Contact[]) => new GetItemsListSuccess(data))
          )
      )
    )
  );

  private getContact = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.GetItemRequest>(GET_CONTACT_REQUEST),
      switchMap((action) =>
        this.http.get(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Contact) => new PhonebookActions.GetItemSuccess(data)),
            catchError((error: HttpErrorResponse) =>
              of(new PhonebookActions.RedirectToView({redirectPath: '../../'}))
            )
          )
      )
    ));

  private createContact = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.CreateItem>(CREATE_CONTACT),
      switchMap((action) => {
        return this.http.post(this.apiEndpoint, action.payload.data)
          .pipe(
            map(() =>
              new PhonebookActions.RedirectToView(
                {redirectPath: `../../view/${action.payload.data.id}`}
                )
            )
          );
      })
    )
  );

  private deleteContact = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.DeleteItem>(DELETE_CONTACT),
      switchMap((action) => {
        return this.http.delete(`${this.apiEndpoint}/${action.payload.id}`)
          .pipe(
            map((data: Contact[]) => new PhonebookActions.GetItemsListRequest)
          );
      })
    )
  );

  private updateContact = createEffect(
    () => this.action$.pipe(
      ofType<PhonebookActions.UpdateItem>(UPDATE_CONTACT),
      switchMap((action) => {
        return this.http.put(`${this.apiEndpoint}/${action.payload.id}`, action.payload.data)
          .pipe(
            mergeMap(() => [
              new PhonebookActions.GetItemRequest({id: (action.payload.id).toString()}),
              new PhonebookActions.GetItemsListRequest
            ])
          );
      })
    )
  );
}
