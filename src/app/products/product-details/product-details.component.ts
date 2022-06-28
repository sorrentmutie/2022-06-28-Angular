import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  @Input() product: Product | undefined = undefined;
  @Output() notify: EventEmitter<string> = new EventEmitter();

  back(): void {
    this.notify.emit("Messaggio");
  }
}
