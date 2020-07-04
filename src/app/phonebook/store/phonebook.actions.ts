import {Action, createAction} from '@ngrx/store';
import {PhonebookItem} from '../interface/phonebookItem';

export const ADD_ITEM_DETAILS = '[Phonebook] Add item';
export const DELETE_ITEM_DETAILS = '[Phonebook] Delete item';
export const UPDATE_ITEM_DETAILS = '[Phonebook] Update item';
const GET_ITEM_REQUEST_DETAILS = '[Phonebook] Get items request';
const GET_ITEM_SUCCESS_DETAILS = '[Phonebook] Get items success';

export const getItemsRequest = createAction(
  GET_ITEM_REQUEST_DETAILS
);

export class GetItemsSuccess implements Action {
  public readonly type = GET_ITEM_SUCCESS_DETAILS;

  constructor(public data: PhonebookItem[]) {}
}

export class AddItem implements Action {
  public readonly type = ADD_ITEM_DETAILS;

  constructor(public data: PhonebookItem) {}
}

export class DeleteItem implements Action {
  public readonly type = DELETE_ITEM_DETAILS;

  constructor(public id: string) {}
}

export class UpdateItem implements Action {
  public readonly type = UPDATE_ITEM_DETAILS;

  constructor(public id: string, public data: PhonebookItem) {}
}
