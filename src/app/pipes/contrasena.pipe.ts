import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    let resultado: string = '';
    return (activar) ? resultado.padEnd(value.length, '*') : value;
     }
}
