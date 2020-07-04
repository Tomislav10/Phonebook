import { Action } from '@ngrx/store';
import {GetItemsListSuccess, GetItemSuccess} from './actions';
import {Contact} from '../../shared/interface/contact';

export interface PhonebookState {
  contactsList?: Contact[];
  currentContact?: Contact;
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
