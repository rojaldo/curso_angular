import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== undefined) {
      if (args[0] === ',') {
        const decimal = Math.round((value % 1) * 10);
        const integer = Math.floor(value);
        return integer + ',' + decimal + 'º';
      } else if (args[0] === '.') {
        const decimal = Math.round((value % 1) * 10);
        const integer = Math.floor(value);
        return integer + '.' + decimal + 'º';
      }
    } else {
      return value + 'º';
    }
  }

}
