import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = "http://api.zippopotam.us/";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let response1 = this.http.get(apiUrl + 'US/00210');
    let response2 = this.http.get(apiUrl + 'IN/110001');
    let response3 = this.http.get(apiUrl + 'BR/01000-000');
    let response4 = this.http.get(apiUrl + 'FR/01000');
    return forkJoin([response1, response2, response3, response4]);
  }


}
