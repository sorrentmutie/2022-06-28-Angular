import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Events } from '../../models/events';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  busLoader: Subscription | undefined = undefined;
  myBoolean: boolean = false;
  constructor(private eventBus: EventBusService) {

    this.busLoader = this.eventBus.on(Events.HttpRequestSent || Events.HttpResponseReceived , (e: boolean) => {
      this.myBoolean = e;
      console.log(this.myBoolean);
    });


  }


}
