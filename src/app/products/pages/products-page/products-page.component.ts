import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy, OnChanges  {

  productsInOffer: Product[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private service: ProductsService, private router: Router){
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.subscription = this.service.getProductsAsObservableFromApi().subscribe(
      prodotti => {
        console.log(prodotti);
        this.productsInOffer = prodotti;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  showDetailsInPage(message: Product) {
    this.router.navigate(['/products', message.id]);
   // alert(message.id);
  }

}
