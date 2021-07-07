import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital',
})
export class FirstCapitalPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value
      .split(' ')
      .map((v) => v.charAt(0).toUpperCase() + v.substr(1))
      .join(' ');
    return null;
  }
}
