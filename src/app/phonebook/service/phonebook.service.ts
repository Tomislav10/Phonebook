import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PhonebookItem} from '../interface/phonebookItem';

@Injectable()
export class PhonebookService {

  // get all phonebook items
  private readonly getPhonebookItems = 'api/getPhonebookItems';

  constructor(private http: HttpClient) {}

  public getItems(): Observable<PhonebookItem[]> {
    return this.http.get<PhonebookItem[]>(this.getPhonebookItems);
  }
}
