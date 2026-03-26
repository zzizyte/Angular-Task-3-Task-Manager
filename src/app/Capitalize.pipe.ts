import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | undefined) {
    if (!value) {
      return;
    }
    return value
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  }
}
