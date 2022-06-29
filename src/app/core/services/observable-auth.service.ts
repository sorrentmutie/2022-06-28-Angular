import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrentUser } from 'src/app/shared/models/current-user';

@Injectable({
  providedIn: 'root'
})
export class ObservableAuthService {
  
  private sbjCurrentUser$:Subject<CurrentUser | undefined> | undefined = undefined;
  obsCurrentUser$:Observable<CurrentUser| undefined> | undefined = undefined;
  constructor() {
    this.sbjCurrentUser$ = new Subject<CurrentUser | undefined>();
    this.obsCurrentUser$ = this.sbjCurrentUser$.asObservable();
   }
   onUserLogged(cu:CurrentUser|undefined){
    this.sbjCurrentUser$?.next(cu);
   }




}
