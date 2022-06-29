import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request);
    return next.handle(request);
   /*  console.log('secondo interceptor');
    console.log(request);
    return next.handle(request).pipe(
      map((event: HttpEvent<unknown>)=>{console.log('secondo event'); console.log(event); return event})
    ); */
  }
}
