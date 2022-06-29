import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnDestroy {

  // isLogged = false;
  isLoggedObservable: Observable<boolean> | undefined = undefined;
 //  subscription: Subscription | undefined = undefined;

  constructor(private authService: AuthService) {
    this.isLoggedObservable = this.authService.login();
   //   console.log('inside welcome');
   //  this.subscription = this.authService.login().subscribe( isLogged => this.isLogged = isLogged);
  }
  ngOnDestroy(): void {
   //  console.log('On destroy');
    // this.subscription?.unsubscribe();
    // unsubscribe();
  }



}
function unsubscribe() {
  throw new Error('Function not implemented.');
}

