import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InterceptorNotification, NotificationType } from '../../models/notification';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-global-notification',
  template: ''
})
export class GlobalNotificationComponent {

  constructor(private toastr: ToastrService, private noficationService: NotificationsService) {
    this.subscribeNotification();
  }

  subscribeNotification() {
    this.noficationService.notificationObservable$?.subscribe((obj: InterceptorNotification) => {
      switch (obj.statusCode) {
        case NotificationType.Ok: {
          this.toastr.success(obj.message, obj.statusCode.toString(), { timeOut: 9000 })
          break;
        }
        case NotificationType.NotFound: {
          this.toastr.warning(obj.message, obj.statusCode.toString(), { timeOut: 9000 })
          break;
        }
        case NotificationType.KO: {
          this.toastr.error(obj.message, obj.statusCode.toString(), { timeOut: 9000 })
          break;
        }
        case NotificationType.Alessio: {
          this.toastr.info(obj.message, obj.statusCode.toString(), { timeOut: 9000 })
          break;
        }
      }
    })
  }

}
