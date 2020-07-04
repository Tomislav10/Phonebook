import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Store} from '@ngrx/store';
import {PhonebookModule} from './phonebook.module';
import {PhonebookActions} from './store/phonebook-action-types';
import {of} from 'rxjs';

@Injectable()
export class PhonebookResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<PhonebookModule>) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.store.dispatch(PhonebookActions.getItemsRequest());

      return of('NONE');
  }
}
