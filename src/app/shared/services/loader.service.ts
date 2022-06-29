import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InterceptorNotification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private notificationIsLoading$: Subject<boolean> | undefined = undefined;
  isLoading$: Observable<boolean> | undefined = undefined;

  constructor() {
    this.notificationIsLoading$ = new Subject();
    this.isLoading$ = this.notificationIsLoading$.asObservable();
  }

  IsLoading(isLoading: boolean) {
    this.notificationIsLoading$?.next(isLoading);
  }

}
