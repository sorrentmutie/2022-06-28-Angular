import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Customer } from 'src/app/subjects/customer';
import { Events } from '../../models/events';
import { InterceptorNotification } from '../../models/notification';
import { EventBusService } from '../../services/event-bus.service';
import { LoaderService } from '../../services/loader.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  subscription: Subscription | undefined = undefined;
  lastCustomer: Customer | undefined = undefined;
  observableNotificationSubscription$: Observable<InterceptorNotification> | undefined = undefined;
  observableIsLoading$: Observable<boolean> | undefined = undefined;


  constructor(private service: EventBusService, private notificationsService: NotificationsService,
    private loaderService: LoaderService) {
    this.subscription = service.on(Events.CustomerAdded,
      (customer: Customer) => { this.lastCustomer = customer });

    this.observableNotificationSubscription$ = this.notificationsService.notificationObservable$;
    this.observableIsLoading$ = this.loaderService.isLoading$;
  }


}
