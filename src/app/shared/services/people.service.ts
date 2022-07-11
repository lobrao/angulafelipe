import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople ():Observable<any> {
    let peopleArrey = [
      {
        firstName:'Felipe',
        lastName:'Santos',
        age: 30

      },
      {
        firstName:'Denize',
        lastName:'Almeida',
        age: 25
      },
      {
        firstName:'Gean',
        lastName:'Biscaro',
        age: 26
      },
      {
        firstName:'Lidia',
        lastName:'Maria',
        age: 22
      },
    ]

    return of(peopleArrey)

  }
}
