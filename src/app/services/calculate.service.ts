import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  count(list: any[], critiria: string, value: any): number {

    let x = 0
    for (let i in list) {
      if (list[i][critiria] === value) {
        x++
      }
    }

    return x;

  }

  sum(list: any[], critiria: string): number {
    let x = 0
    for (let i in list) {
      x = + list[i][critiria]
    }
    return x
  }
}
