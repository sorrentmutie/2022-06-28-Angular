import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    console.log('Sono nella guard');

    if(this.authService.cu!==undefined) {
      return of(true);
    } else {
      this.router.navigate(['/']);
      return of(false);
    }
  }
}
