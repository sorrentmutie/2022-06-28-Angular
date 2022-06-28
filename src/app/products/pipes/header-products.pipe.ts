import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'headerProducts'
})
export class HeaderProductsPipe implements PipeTransform {

  transform(value: Product[]): string {
    if(value.length === 1) {
      return "C\'è un solo prodotto";
    } else if(value.length === 0) {
      return 'Non ci sono prodotti';
    } else {
      return "Ci sono " + value.length + " prodotti";
    }
  }

}
