import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { CurrentUser } from 'src/app/shared/models/current-user';
import { ObservableAuthService } from './observable-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cu:CurrentUser | undefined;
  constructor(private observableAuthService: ObservableAuthService, private router:Router) { }

  login(): Observable<CurrentUser> {
    let cu = {userName:"NomeUtente", email:"email@email.it", roles:["admin","areamanager"], image:"https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"}
    return of(cu).pipe(
      delay(1000),
      tap( x => {
        this.cu = cu;
        this.observableAuthService.onUserLogged(cu);
      })

    );
  }

  logout(): void {
    this.cu = undefined;
    this.router.navigate(['/']);
  }
}
