import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KDVPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    // value : pipe,2ı uyguladığımız veri





    return value + ( value * 0.18);
    //yeni degistirdigimiz veri
  }

}
