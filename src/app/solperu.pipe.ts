import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'solperu',
})
export class SolperuPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: string, args?: any): string {
    return ' S/.' + this.decimalPipe.transform(value, '1.2-2');
  }
}
