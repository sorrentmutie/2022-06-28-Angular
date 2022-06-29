import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUsersResponse } from './random-user';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private httpService: HttpClient) { }

  getData(): Observable<RandomUsersResponse> {
      return this.httpService.get<RandomUsersResponse>(environment.urlRandomUsers);
  }
}
