import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';
import { NotificationsService } from '../services/notifications.service';
import { InterceptorNotification, NotificationType } from '../models/notification';
import { LoaderService } from '../services/loader.service';
import { EventBusService } from '../services/event-bus.service';
import { EmitEvent } from '../models/emitEvent';
import { Events } from '../models/events';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private notificationsService: NotificationsService,
    private loaderService: LoaderService, private eventBus: EventBusService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const clonedRequest = request.clone({
    // headers: request.headers.set('Authorization', 'Bearer ' + this.tokenService.getToken())

    // return next.handle(clonedRequest)
    /*  console.log('primo interceptor');

     console.log(request);
     return next.handle(request).pipe(
       map((event: HttpEvent<unknown>)=>{console.log('primo event'); console.log(event); return event})
     ); */

    this.loaderService.IsLoading(true);

    this.eventBus.emit(new EmitEvent(Events.HttpRequestSent, true));

    return next.handle(request).pipe(
    map((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse) {
        this.notificationsService.send({
          statusCode: NotificationType.Ok,
          message: event.statusText
        });
        this.loaderService.IsLoading(false);
        this.eventBus.emit(new EmitEvent(Events.HttpResponseReceived, true));
        this.eventBus.emit(new EmitEvent(Events.HttpRequestSent, false));
      }
      return event;
    }),

    catchError((errore: HttpErrorResponse) => {
      return throwError(() => {
        console.log('notok:', errore);
        let tmpErr: InterceptorNotification;
        if (errore.status === 0) {
          tmpErr = { message: 'Errore di comunicazione', statusCode: NotificationType.KO }
        } else {
          tmpErr = { message: errore.error, statusCode: NotificationType.NotFound }
        }
        this.notificationsService.send(tmpErr);

        return { status: errore.status, message: errore.error }
      })
    }
    )
  )
  }
}
