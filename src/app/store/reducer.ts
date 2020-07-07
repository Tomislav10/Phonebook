import {Action, combineReducers, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {AppState} from './interfaces';
import {phonebookReducer} from '../phonebook/store';

export function appState(state: AppState, action: Action) {
  return combineReducers({
    phonebookReducer
  })(state, action);
}

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [] : [];
