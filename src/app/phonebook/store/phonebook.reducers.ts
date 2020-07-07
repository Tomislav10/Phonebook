import { Action } from '@ngrx/store';
import {GetItemsSuccess} from './phonebook.actions';
import {PhonebookItem} from '../../shared/interface/phonebookItem';

export interface PhonebookState {
  phonebook: PhonebookItem[];
}

export function phonebookReducer(
  phonebookState: PhonebookState,
  action: Action
): PhonebookState {
  if (action instanceof GetItemsSuccess) {
    return {phonebook: action.data};
  }

  return phonebookState;
}
