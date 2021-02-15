import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe2'
})
export class MyPipe2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
