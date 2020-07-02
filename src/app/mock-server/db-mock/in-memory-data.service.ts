import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mediaItems = [
      {id: 1, title: 'Neka pjema', type: 'Audio'},
      {id: 2, title: 'Sample audio', type: 'Audio'},
      {id: 3, title: 'Slika neka', type: 'Image'},
      {id: 4, title: 'Dobar video', type: 'Video'},
      {id: 5, title: 'Super', type: 'Audio'},
      {id: 6, title: 'hey', type: 'Video'},
      {id: 7, title: 'Smile', type: 'Document'},
      {id: 8, title: 'Hello', type: 'Audio'},
      {id: 9, title: 'How Are you', type: 'Image'},
      {id: 10, title: 'I am', type: 'Document'},
      {id: 11, title: 'Cv', type: 'Audio'},
      {id: 12, title: 'Jpeg slika', type: 'Image'},
      {id: 13, title: 'Ovo je ok', type: 'Image'},
      {id: 14, title: 'Good doc', type: 'Document'},
      {id: 15, title: 'Exam vid', type: 'Video'},
      {id: 16, title: 'This is something', type: 'Audio'},
      {id: 17, title: 'something', type: 'Document'},
      {id: 18, title: 'Yeah', type: 'Audio'},
      {id: 19, title: 'Whats up', type: 'Video'},
      {id: 20, title: 'Hello there', type: 'Video'}
    ];
    return {mediaItems};
  }
}
