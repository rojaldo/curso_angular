import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(public http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url);
  }
}
