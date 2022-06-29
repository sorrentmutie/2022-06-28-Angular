import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../customer';
import { CustomersService } from '../../customers.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnDestroy {

  lastCustomer: Customer | undefined = undefined;
  subscription: Subscription | undefined = undefined;

  constructor(private service: CustomersService) {
    this.subscription = this.service.customersObservable$?.subscribe(
      customer => this.lastCustomer = customer
    )
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
