import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: any, activar?: any): string {
    return activar ? this.ocultar(value) : value;
  }
  private ocultar (text: string): string {
    return '*'.repeat(text.length);
  }

}
