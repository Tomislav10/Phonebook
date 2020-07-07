import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {PhonebookState} from './store/phonebook.reducers';
import {GetItemsRequest} from './store/phonebook.actions';

@Injectable()
export class PhonebookResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<PhonebookState>, public router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('asdasd')
    this.store.dispatch(new GetItemsRequest);

    return of('NONE');
  }
}
