import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { InterceptorNotification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationSubject$: Subject<InterceptorNotification> | undefined = undefined;
  notificationObservable$: Observable<InterceptorNotification> | undefined = undefined;

  constructor() {
    this.notificationSubject$ = new Subject();
    this.notificationObservable$ = this.notificationSubject$.asObservable();
  }

  send(notification: InterceptorNotification) {
    this.notificationSubject$?.next(notification);
  }

}
