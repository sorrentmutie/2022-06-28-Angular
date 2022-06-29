import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';
import { SpecialOffersService } from './special-offers.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private specialOffers: SpecialOffersService,
              private httpClient: HttpClient) { }

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

 getProductsAsObservable(): Observable<Product[]> {
  return of(this.getProducts());
 }

 getProductsFromHttp(): Observable<Product[]> {
   const url="http://localhost:7000/products/";
   return this.httpClient.get<Product[]>(url);
 }

 getProductById(id: number): Observable<Product> {
   const url=environment.urlProducts + "/" + id;
   return this.httpClient.get<Product>(url);
 }


}
