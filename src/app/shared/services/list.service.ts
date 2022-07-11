import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse ={
  
  info: {},
  result: {},

}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL='https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getlist():Observable<any> {
    return this.httpClient.get<any>(this.apiURL);

  }
}
