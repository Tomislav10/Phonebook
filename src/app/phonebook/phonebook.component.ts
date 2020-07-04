import {Component} from '@angular/core';
import {ActivationEnd, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent {

  public listType: Observable<'All contacts' | 'My favorites'>;

  constructor(private router: Router) {
    this.listType = router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((data: ActivationEnd) => data.snapshot.data.dataloaded)
    );
  }
}
