import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUserResponse } from './random-user';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getResponse(n: string): Observable<RandomUserResponse> {
    const url = environment.randomApiUrl + n;
    return this.http.get<RandomUserResponse>(url);
  }

  getResponseWithoutNumber(): Observable<RandomUserResponse> {
    const url = environment.randomApiUrl + "50";
    return this.http.get<RandomUserResponse>(url);
  }

}
