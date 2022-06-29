import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject$: Subject<Customer> | undefined = undefined;
  private localInterval: any ;
  customersObservable$: Observable<Customer> | undefined = undefined;
  constructor() {
    this.subject$ = new Subject();
    this.customersObservable$ = this.subject$.asObservable();
  }

  start() : void {
    this.localInterval = setInterval( () => {

      const newCustomer = {
        name: 'Customer: ' + Math.random(),
        city: 'City:' + Math.random()
      };
      this.subject$?.next(newCustomer);
    }  ,2000);
  }

  stop(){
    clearInterval(this.localInterval);
  }
}
