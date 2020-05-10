import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonusCarac'
})
export class BonusCaracPipe implements PipeTransform {
  /**
   * Récupérer le bonus de caractéristique
   * @param value Valeur d'une caractéristique
   */
  transform(value: number): number {
    let val = Math.floor(value-10)/2;
    return val;
  }
}

@Pipe({
  name: 'bonusMaitrise'
})
export class BonusMaitrisePipe implements PipeTransform {
  /**
   * Bonus de maîtrise en fonction du niveau du joueur
   * @param value Niveau du joueur
   */
  transform(value: number): number {
    return Math.ceil(value/4)+1;
  }

}
