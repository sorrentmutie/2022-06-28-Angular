import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova-demo';
  constructor(){
    const myObservable = of(1,3,5,7,9,11,13,15);

    const myObserver = {
      next: (x: number) => console.log(x),
      error: (err: Error) => console.log(err),
      complete: () => console.log('Trasmissione terminata')
    }

    myObservable.subscribe(myObserver);
  }
}
