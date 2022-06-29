import { Component, OnInit } from '@angular/core';
import { EmitEvent } from 'src/app/shared/models/emitEvent';
import { Events } from 'src/app/shared/models/events';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

@Component({
  selector: 'app-customer-producer',
  templateUrl: './customer-producer.component.html',
  styleUrls: ['./customer-producer.component.css']
})
export class CustomerProducerComponent {

  constructor(private eventBus: EventBusService) { }

  produce(): void {
    this.eventBus.emit(new EmitEvent(Events.CustomerAdded,
       {name: "Salvatore Sorrentino", city: "Naples"}));
  }

}
