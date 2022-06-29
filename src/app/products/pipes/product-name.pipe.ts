import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(value: string, argument: string): string {
    return value.replace(/o/g, argument);
  }

}
