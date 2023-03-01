import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'referencias'
})
export class ReferenciasPipe implements PipeTransform {

  transform(value: string): string {

    let result:string;
    result = "Ref-" + value  

    return result;
  }

}
