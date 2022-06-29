import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { EmitEvent } from '../models/emitEvent';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject = new Subject<any>();
  constructor() { }

  emit(event: EmitEvent){
    this.subject.next(event);
  }


  on(eventName: Events, action: any) : Subscription{
    return this.subject
    .pipe(
      filter((e: EmitEvent) => {return e.name ===eventName; }),
      map( (e: EmitEvent) => e.value )
    )
    .subscribe(action);
  }
}
