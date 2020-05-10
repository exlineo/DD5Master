import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carac'
})
export class CaracPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
