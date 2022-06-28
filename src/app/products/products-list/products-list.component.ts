import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() products: Product[] | undefined = undefined;
  @Output() notify: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
   //  this.products = this.getProducts();
  }
  // getProducts(): Product[] {
  //    const products: Product[] = [
  //     {
  //       "id" :1,
  //       "name": "Frigorifero",
  //       "price": 1000,
  //       "description": "descrizione 1",
  //       "releaseDate" : new Date(),
  //       "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
  //     },
  //     {
  //       "id" :2,
  //       "name": "Frigorifero Speciale",
  //       "price": 1200,
  //       "description": "descrizione 2",
  //       "releaseDate" : new Date(),
  //       "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
  //     }
  //    ];
  //    return products;
  // }

  showDetails(product: Product): void {
    //alert(product.id);
    this.notify.emit(product);
  }


}
