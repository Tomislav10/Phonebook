import {Action} from '@ngrx/store';
import {PhonebookItem} from '../../shared/interface/phonebookItem';

export const ADD_ITEM = '[Phonebook] Add item';
export const DELETE_ITEM = '[Phonebook] Delete item';
export const UPDATE_ITEM = '[Phonebook] Update item request';
export const GET_ITEMS_LIST_REQUEST = '[Phonebook] Get items request';
export const GET_ITEMS_LIST_SUCCESS = '[Phonebook] Get items success';
export const GET_ITEM_REQUEST = '[Phonebook] Get item request';
export const GET_ITEM_SUCCESS = '[Phonebook] Get item success';

export class GetItemsListRequest implements Action {
  public readonly type = GET_ITEMS_LIST_REQUEST;
}

export class GetItemsListSuccess implements Action {
  public readonly type = GET_ITEMS_LIST_SUCCESS;

  constructor(public data: PhonebookItem[]) {
  }
}

export class GetItemRequest implements Action {
  public readonly type = GET_ITEM_REQUEST;

  constructor(public payload: { id: string }) {
  }
}

export class GetItemSuccess implements Action {
  public readonly type = GET_ITEM_SUCCESS;

  constructor(public data: PhonebookItem) {
  }
}

export class AddItem implements Action {
  public readonly type = ADD_ITEM;

  constructor(public payload: { data: PhonebookItem; }) {
    console.log(payload.data);
    console.log(payload.data);
    console.log(payload.data);
  }
}

export class DeleteItem implements Action {
  public readonly type = DELETE_ITEM;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateItem implements Action {
  public readonly type = UPDATE_ITEM;

  constructor(public payload: { id: number, data: PhonebookItem }) {
  }
}
