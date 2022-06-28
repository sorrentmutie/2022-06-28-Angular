import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/o/g, "***");
  }
}
