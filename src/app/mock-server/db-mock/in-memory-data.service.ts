import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

// tslint:disable max-line-length

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  private phonebookItems = [
    {
      id: 1,
      name: 'Ivan Ivić',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg'
    },
    {
      id: 2,
      name: 'Tomislav Tomic',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN1Q7-MdqYQGwOCEA6pzuCGhiVOtgDQGa4Ew&usqp=CAU'
    },
    {
      id: 3,
      name: 'John John',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3iGD3yPfOSFOaxJ7-3W8hNNFCLnTVEZMdBQ&usqp=CAU'
    },
    {
      id: 4,
      name: 'Ovaj Onaj',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYJ7btjZu49Bq9QH9aojKVEkCGbk6l7v_9Kg&usqp=CAU'
    },
    {
      id: 5,
      name: 'Marko Marković',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6y7XR34WptAIedVlzfyS-pzdBJl7v4V1Ylg&usqp=CAU'
    },
    {
      id: 6,
      name: 'Ante Antić',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTObO69po1QllYI9cEzlfAPQF7DX8221EsKxg&usqp=CAU'
    },
    {
      id: 7,
      name: 'Da Da Da',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY77LhrvQ5fmfcOeN9ryJsPzDBUJcMAcXC7g&usqp=CAU'
    },
    {
      id: 8,
      name: 'Ne ne',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBPsc1vZu2OIFJ82YIMRDHAQsyAHDQi9ENsQ&usqp=CAU'
    },
    {
      id: 9,
      name: 'How Are you',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYCsK_FwdYncYasoNOsUkAI17TQbu6o8viJQ&usqp=CAU'
    },
    {
      id: 10,
      name: 'You are',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzTndtZRx7Tmr4SmGAdplqxsQyPYtHSkm1AA&usqp=CAU'
    },
    {
      id: 11,
      name: 'Yes no',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPRKrF2AjIvHJ3q6J4hGU-7XfFy-BIVZkq4g&usqp=CAU'
    },
    {
      id: 12,
      name: 'Jpeg photo',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7fND7OFuWOytGUHztSs7oT1rpFpeV_mVmsA&usqp=CAU'
    },
    {
      id: 13,
      name: 'Ovo je ok',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://us.123rf.com/450wm/mimagephotography/mimagephotography1409/mimagephotography140900212/31491442-side-view-portrait-of-a-young-african-american-man.jpg?ver=6'
    },
    {
      id: 14,
      name: 'Good good',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6c1w-P7JvQO16X8Vc3TlNaR_VBJyrIs0pdw&usqp=CAU'
    },
    {
      id: 15,
      name: 'Tamara Tamić',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFnfe5O3wbY0UcDLvSStThZcmksVr3NcBF5g&usqp=CAU'
    },
    {
      id: 16,
      name: 'Who am I',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8x8OgnrpRraO21f1ocUh34BHHE4tB_dO5BQ&usqp=CAU'
    },
    {
      id: 17,
      name: 'something new',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv51OXIbQ4WtIhq7mZXx3-8aHBsHbE3Pk1VA&usqp=CAU'
    },
    {
      id: 18,
      name: 'Oh yeah',
      email: '123@123.da',
      favorite: false,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjA67vMB_jCjCY4U-cEVVbkm3DhD0JKvz09Q&usqp=CAU'
    },
    {
      id: 19,
      name: 'Whats up',
      email: '123@123.da',
      favorite: true,
      contacts: [
        {label: 'home', number: '+3851111111'},
        {label: 'private', number: '+3851353463411'},
        {label: 'work', number: '+38554745675611'},
        {label: 'fax', number: '+38515675675111'}
      ],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPooarGEc8q4RN0hNrXD56aIxNcvrgplYftg&usqp=CAU'
    }
  ];

  createDb() {
    return {phonebookItems: this.phonebookItems};
  }
}
