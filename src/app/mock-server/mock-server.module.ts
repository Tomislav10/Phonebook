import {NgModule} from '@angular/core';
import {InMemoryDataService} from './db-mock/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';


@NgModule({
  declarations: [],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 0 }
    )
  ],
  bootstrap: []
})
export class MockServerModule { }
