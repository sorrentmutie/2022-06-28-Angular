import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrNotification } from '../models/toastr-notification';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {
  private notificationSubject$: Subject<ToastrNotification> |undefined = undefined;
  notificationsObservable$: Observable<ToastrNotification> | undefined = undefined;
  constructor() {
    this.notificationSubject$ = new Subject<ToastrNotification>();
    this.notificationsObservable$ = this.notificationSubject$.asObservable();
  }
  publishNotification(notification: ToastrNotification) {
 
    this.notificationSubject$?.next(notification);
  }
}
