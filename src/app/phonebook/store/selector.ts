import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PhonebookState} from './reducer';

export const selectPhonebookState = createFeatureSelector<PhonebookState>('phonebookState');

export const getAllContacts = createSelector(
  selectPhonebookState,
  state => state && state.contactsList
);

export const getFavoriteContacts = createSelector(
  getAllContacts,
  state => (state || []).filter(
    item => item.favorite
  )
);

export const getCurrentContact = createSelector(
  selectPhonebookState,
  state => state && state.currentContact
);
