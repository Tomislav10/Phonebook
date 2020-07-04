import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {PhonebookItem} from '../../phonebook/interface/phonebookItem';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  private phonebookItems = [
    {id: 1, name: 'Iavan Iviać', email: '123@123.da', favorite: false, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 2, name: 'Tomislav Tomislav', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 3, name: 'John John', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 4, name: 'Ovaj Onaj', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 5, name: 'Marko Marković', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 6, name: 'Ante Antić', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 7, name: 'Da Da', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 8, name: 'Ne ne', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 9, name: 'How Are you', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 10, name: 'I am', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 11, name: 'Cv a', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 12, name: 'Jpeg slika', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 13, name: 'Ovo je ok', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 14, name: 'Good doc', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 15, name: 'Exam vid', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 16, name: 'This is something', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 17, name: 'something Good', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 18, name: 'Yeah yes', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 19, name: 'Whats up', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]},
    {id: 20, name: 'Hello there', email: '123@123.da', favorite: true, phoneNumbers: [{type: 'home', number: '+3851111111'}]}
  ];

  createDb() {
    return {phonebookItems: this.phonebookItems};
  }
}
