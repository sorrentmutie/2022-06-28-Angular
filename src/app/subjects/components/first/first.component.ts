import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../customer';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnDestroy {

  subscription: Subscription | undefined = undefined;
  customers: Customer[] = [];
  constructor(private service: CustomersService) {
    this.subscription = this.service.customersObservable$?.subscribe(
      customer => this.customers.push(customer)
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  start(): void {
    this.service.start();
  }

  stop(): void {
    this.service.stop();
  }


}
