import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  product: Product | undefined = undefined;
  constructor(private router: Router, private route: ActivatedRoute, private service: ProductsService) {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.service.getProduct(id).subscribe(product => this.product = product);
    }
  }

  back(){
    this.router.navigate(['/products']);
  }


}
