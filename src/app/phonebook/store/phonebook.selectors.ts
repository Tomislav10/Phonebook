import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PhonebookState} from './phonebook.reducers';

export const selectPhonebookState = createFeatureSelector<PhonebookState>('phonebookState');

export const getAllPhonebookItems = createSelector(
  selectPhonebookState,
  (state) => state && state.phonebook
);