import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundUp'
})
export class RoundUpPipe implements PipeTransform {

  transform(value: number): number {
    if (!value) {
      return 0;
    }

    const decimals = value % 1;
    const valueNoDecimals = Math.trunc(value);

    if (decimals === 0) {
      return value;
    } else if (decimals < 0.5) {
      return valueNoDecimals + 0.5;
    } else {
      return Math.round(value);
    }
  }

}
