import { Pipe, PipeTransform } from '@angular/core';
import { WsSendI } from '../modeles/ws-i';
import { PersoLivreI } from '../modeles/perso-i';

@Pipe({
  name: 'sortsMsg'
})
export class SortsMsgPipe implements PipeTransform {

  transform(value: Array<WsSendI>): Array<WsSendI> {
    return value.sort(this.compare);
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const n1 = a.date.toUpperCase();
    const n2 = b.date.toUpperCase();
  
    let comparison = 0;
    if (n1 > n2) {
      comparison = 1;
    } else if (n1 < n2) {
      comparison = -1;
    }
    return comparison;
  }
}
@Pipe({
  name: 'sortNiv'
})
export class SortNivPipe implements PipeTransform {
  // Renvoyer un tableau des sorts de perso en fonction de leur niveau comparé
  transform(value: Array<PersoLivreI>, niv:number): Array<PersoLivreI> {
    return value.filter(v => v.niveau <= niv);
  }
}