import { Action } from '@ngrx/store';
import {GetItemsSuccess} from './phonebook.actions';
import {PhonebookItem} from '../../shared/interface/phonebookItem';

export interface PhonebookState {
  contactsList: PhonebookItem[];
}

export function phonebookReducer(
  phonebookState: PhonebookState,
  action: Action
) {
  if (action instanceof GetItemsSuccess) {
    return {contactsList: action.data};
  }

  return phonebookState;
}
