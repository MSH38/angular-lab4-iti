import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIDBirthYear'
})
export class NationalIDBirthYearPipe implements PipeTransform {

  transform(value: string): string {
    let year: string;
    if(value.startsWith('2'))
      year = '19';
    
    else
      year = '20';
      year += value.slice(1,3);
      let month = value.slice(3,5);
      let day = value.slice(5,7);

      return `${day} - ${month} - ${year}`;
  }

}
