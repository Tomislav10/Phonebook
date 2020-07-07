import {Action} from '@ngrx/store';
import {Contact} from '../../shared/interface/contact';

export const CREATE_CONTACT = '[Phonebook] Create contact';
export const DELETE_CONTACT = '[Phonebook] Delete contact';
export const UPDATE_CONTACT = '[Phonebook] Update contact request';
export const GET_CONTACTS_LIST_REQUEST = '[Phonebook] Get contacts request';
export const GET_CONTACTS_LIST_SUCCESS = '[Phonebook] Get contacts success';
export const GET_CONTACT_REQUEST = '[Phonebook] Get contact request';
export const GET_CONTACT_SUCCESS = '[Phonebook] Get contact success';
export const REDIRECT_TO_VIEW = '[Phonebook] Redirect to view';

export class GetItemsListRequest implements Action {
  public readonly type = GET_CONTACTS_LIST_REQUEST;
}

export class GetItemsListSuccess implements Action {
  public readonly type = GET_CONTACTS_LIST_SUCCESS;

  constructor(public data: Contact[]) {
  }
}

export class GetItemRequest implements Action {
  public readonly type = GET_CONTACT_REQUEST;

  constructor(public payload: { id: string }) {
  }
}

export class GetItemSuccess implements Action {
  public readonly type = GET_CONTACT_SUCCESS;

  constructor(public data: Contact) {
  }
}

export class CreateItem implements Action {
  public readonly type = CREATE_CONTACT;

  constructor(public payload: { data: Contact }) {}
}

export class DeleteItem implements Action {
  public readonly type = DELETE_CONTACT;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateItem implements Action {
  public readonly type = UPDATE_CONTACT;

  constructor(public payload: { id: number, data: Contact }) {}
}

export class RedirectToView implements Action {
  public readonly type = REDIRECT_TO_VIEW;

  constructor(public payload: { redirectPath: string }) {}
}
