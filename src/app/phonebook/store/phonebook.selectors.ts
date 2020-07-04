import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PhonebookState} from './phonebook.reducers';
import {map} from 'rxjs/operators';
import {PhonebookItem} from '../interface/phonebookItem';

export const selectPhonebookState = createFeatureSelector<PhonebookState>('phonebookState');

export const getAllPhonebookItems = createSelector(
  selectPhonebookState,
  (state) => state && state.phonebook
);

export const getFavoritePhonebookItems = createSelector(
  selectPhonebookState,
  (state) => state.phonebook.filter(
    item => item.favorite
  )
);
