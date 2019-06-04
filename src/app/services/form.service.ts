import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: HttpClient) { }

  getRequest(url?: string): Observable<any> {
    if (url === undefined) {
      url = this.url;
    }
    return this.http.get(url);
  }
}
