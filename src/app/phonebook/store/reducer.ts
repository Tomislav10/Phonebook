import { Action } from '@ngrx/store';
import {PhonebookItem} from '../../shared/interface/phonebookItem';
import {GetItemsListSuccess, GetItemSuccess} from './actions';

export interface PhonebookState {
  contactsList?: PhonebookItem[];
  currentContact?: PhonebookItem;
}

export function phonebookReducer(
  phonebookState: PhonebookState,
  action: Action
) {
  if (action instanceof GetItemsListSuccess) {
    return {...phonebookState, contactsList: action.data};
  }

  if (action instanceof GetItemSuccess) {
    return {...phonebookState, currentContact: action.data};
  }

  return phonebookState;
}
