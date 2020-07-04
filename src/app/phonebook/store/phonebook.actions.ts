import {Action, createAction} from '@ngrx/store';
import {PhonebookItem} from '../interface/phonebookItem';

export const ADD_ITEM_DETAILS = '[Phonebook] Add item';
export const DELETE_ITEM_DETAILS = '[Phonebook] Delete item';
export const UPDATE_ITEM_REQUEST_DETAILS = '[Phonebook] Update item request';
export const UPDATE_ITEM_SUCCESS_DETAILS = '[Phonebook] Item updated successfully';
export const GET_ITEM_REQUEST_DETAILS = '[Phonebook] Get items request';
export const GET_ITEM_SUCCESS_DETAILS = '[Phonebook] Get items success';

export class GetItemsRequest implements Action {
  public readonly type = GET_ITEM_REQUEST_DETAILS;
}

export class GetItemsSuccess implements Action {
  public readonly type = GET_ITEM_SUCCESS_DETAILS;

  constructor(public data: PhonebookItem[]) {
  }
}

export class AddItem implements Action {
  public readonly type = ADD_ITEM_DETAILS;

  constructor(public payload: { data: PhonebookItem; }) {
  }
}

export class DeleteItem implements Action {
  public readonly type = DELETE_ITEM_DETAILS;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateItem implements Action {
  public readonly type = UPDATE_ITEM_REQUEST_DETAILS;

  constructor(public payload: { id: number, data: PhonebookItem }) {
  }
}

export const UpdateItemSuccess = createAction(
  GET_ITEM_SUCCESS_DETAILS
);
