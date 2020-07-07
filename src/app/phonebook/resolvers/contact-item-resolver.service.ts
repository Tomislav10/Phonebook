import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {GetItemRequest} from '../store/actions';
import {PhonebookState} from '../store';
import {of} from 'rxjs';
import {filter, take} from 'rxjs/operators';

@Injectable()
export class ContactItemResolverService implements Resolve<{}> {
  constructor(private readonly store: Store<PhonebookState>, public router: Router) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd), take(1)).subscribe((data: NavigationEnd) => {
        const contactId = data.url.substr(data.url.lastIndexOf('/') + 1);
        if (!(/^\d+$/).test(contactId)) {
          this.router.navigate(['../../']);
        } {
          this.store.dispatch(new GetItemRequest({id: contactId}));
        }
      }
    );

    return of('NONE');
  }
}
