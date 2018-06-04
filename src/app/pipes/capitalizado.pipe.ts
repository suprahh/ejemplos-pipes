import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, arg1?: any, arg2?: any ): string {
    const data = value.toLowerCase();
    const nombres = data.split(' ');
    for ( const i in nombres) {
      nombres[i] = `${nombres[i][0].toUpperCase()}${nombres[i].substr(1)} `;
    }
    return nombres.join(' ');
  }

}
