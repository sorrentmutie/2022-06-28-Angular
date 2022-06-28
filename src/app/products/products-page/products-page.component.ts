import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent  {

  products: Product[] | undefined = undefined;
  productsToBeOrdered: Product[] | undefined = undefined;
  selectedProduct: Product | undefined = undefined;

  constructor() {
    this.products = this.getProducts();
    this.productsToBeOrdered = this.getProductsToBeOrdered();
   }

  getProducts(): Product[] {
    const products: Product[] = [
     {
       "id" :1,
       "name": "Frigorifero",
       "price": 1000,
       "description": "descrizione 1",
       "releaseDate" : new Date(),
       "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
     },
     {
       "id" :2,
       "name": "Frigorifero Speciale",
       "price": 1200,
       "description": "descrizione 2",
       "releaseDate" : new Date(),
       "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
     }
    ];
    return products;
 }

 getProductsToBeOrdered(): Product[] {
  const products: Product[] = [
   {
     "id" :3,
     "name": "XXXX Frigorifero",
     "price": 1000,
     "description": "descrizione 1",
     "releaseDate" : new Date(),
     "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
   },
   {
     "id" :4,
     "name": "XXXXX Frigorifero Speciale",
     "price": 1200,
     "description": "descrizione 2",
     "releaseDate" : new Date(),
     "image": "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
   }
  ];
  return products;
}

showDetailsComponent(selectedProduct: Product ) {
  this.selectedProduct = selectedProduct;
}

showTable(message: string) {
  console.log(message);
  this.selectedProduct = undefined;
}


}
