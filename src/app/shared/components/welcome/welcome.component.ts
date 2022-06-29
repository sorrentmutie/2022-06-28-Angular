import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ObservableAuthService } from 'src/app/core/services/observable-auth.service';
import { CurrentUser } from '../../models/current-user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  // isLogged = false;
  currentUser: CurrentUser|undefined = undefined;
  subscriptionInit: Subscription | undefined = undefined;
  subscriptionLogin: Subscription | undefined = undefined;

  constructor(private authService: AuthService, private observableAuthService:ObservableAuthService) {
   
   //   console.log('inside welcome');
   //  this.subscription = this.authService.login().subscribe( isLogged => this.isLogged = isLogged);
  }
  ngOnInit(): void {
    this.subscriptionInit = this.observableAuthService.obsCurrentUser$?.subscribe(cu=>this.currentUser = cu);
  }
  ngOnDestroy(): void {
   //  console.log('On destroy');
    this.subscriptionInit?.unsubscribe();
    this.subscriptionLogin?.unsubscribe();
  }
  Login(){
    this.subscriptionLogin = this.authService.login().subscribe(cu=> this.currentUser = cu);
  }
  LogOut(){
    this.authService.logout();
  }


}
function unsubscribe() {
  throw new Error('Function not implemented.');
}

