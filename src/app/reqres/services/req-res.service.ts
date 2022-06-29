import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqResResponse } from '../req-res';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ReqResResponse> {
    return this.http.get<ReqResResponse>(environment.reqresUrl);
  }
}
