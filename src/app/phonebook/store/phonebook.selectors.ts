import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PhonebookState} from './phonebook.reducers';

export const selectPhonebookState = createFeatureSelector<PhonebookState>('phonebookState');

export const getAllPhonebookItems = createSelector(
  selectPhonebookState,
  (state) => state && state.contactsList
);

export const getFavoritePhonebookItems = createSelector(
  selectPhonebookState,
  (state) => state.contactsList.filter(
    item => item.favorite
  )
);
