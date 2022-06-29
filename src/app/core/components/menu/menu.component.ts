import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrentUser } from 'src/app/shared/models/current-user';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { AuthService } from '../../services/auth.service';
import { ObservableAuthService } from '../../services/observable-auth.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrNotification } from '../../models/toastr-notification';
import { ToastrNotificationService } from '../../services/toastr-notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(private authService:AuthService,
              private observableAuthService:ObservableAuthService,
              private notificationService: ToastrNotificationService,
              private toastr: ToastrService) {


    this.notificationService.notificationsObservable$?.subscribe(
      (notifica: ToastrNotification) => {

        switch(notifica.status) {
          case 200:
            this.toastr.success('Hello world!', notifica.message);
            break;
          case 404:
            this.toastr.warning('Hello world!', notifica.message);
            break;
          case 0:
              this.toastr.error('Hello world!', notifica.message);
              break;
          }
        console.log(notifica);
        console.log('Sono nella notifica');

      });

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  currentUser:CurrentUser|undefined = undefined;
  private subscription:Subscription|undefined = undefined;
  ngOnInit(): void {
    this.currentUser =this.authService.cu;
    this.subscription = this.observableAuthService.obsCurrentUser$?.subscribe(cu=>this.currentUser = cu);
  }

  Login(){
    this.authService.login().subscribe(resp=>{
      this.currentUser = resp;
    });
  }
  Logout(){
    this.authService.logout();
    this.currentUser = this.authService.cu;
    this.observableAuthService.onUserLogged(undefined);
  }
}
