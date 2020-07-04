import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {PhonebookModule} from './phonebook.module';
import {PhonebookActions} from './store/phonebook-action-types';
import {of} from 'rxjs';

@Injectable()
export class PhonebookResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<PhonebookModule>, public router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new PhonebookActions.GetItemsRequest());

    return of('NONE');
  }
}
