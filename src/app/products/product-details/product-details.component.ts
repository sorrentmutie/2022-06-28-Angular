import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
 // @Input() product: Product | undefined = undefined;
 // @Output() notify: EventEmitter<string> = new EventEmitter();

  product: Product | undefined = undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService) {
    const id=this.route.snapshot.paramMap.get('id');
    if(id) {
      this.service.getProductById(parseInt(id)).subscribe(
        product => this.product = product
      );
    }
  }

  back(): void {
   // this.notify.emit("Messaggio");
   this.router.navigate(['/products']);
  }
}
