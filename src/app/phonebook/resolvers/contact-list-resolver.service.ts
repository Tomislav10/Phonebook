import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {PhonebookState} from '../store';
import {GetItemsListRequest} from '../store/actions';

@Injectable()
export class ContactListResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<PhonebookState>, public router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new GetItemsListRequest);

    return of('NONE');
  }
}
