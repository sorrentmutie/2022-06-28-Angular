import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  token = "xxxxxx";

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Sono nel secondo interceptor');
   let requestCloned = request.clone({
    headers: request.headers.set('Authorization','Bearer ' + this.token)
   });

    return next.handle(requestCloned).pipe(
      tap((evento: HttpEvent<unknown>) => {

        if(evento instanceof HttpResponse)  {
                console.log("Response nel secondo interceptor");
          console.log(evento);
          console.log('Sto uscendo dal secondo interceptor');
        };
      }),
      catchError((errore: HttpErrorResponse) => {

        return throwError(() => errore);
      })
    );
  }
}
