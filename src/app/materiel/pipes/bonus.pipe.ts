import { Pipe, PipeTransform } from '@angular/core';
/**
 * Calculer un bonus de caractéristique en fonction du niveau
 */
@Pipe({
  name: 'bonusCarac'
})
export class BonusCaracPipe implements PipeTransform {
  /**
   * Récupérer le bonus de caractéristique
   * @param value Valeur d'une caractéristique
   */
  transform(value: number): number {
    let val = Math.floor((value-10)/2);
    return val;
  }
}
/**
 * Calculer un bonus de maîtrise en fonction du niveau
 */
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
/**
 * Renvoyer le multiplicateur d'une compétence pour avoir son bonus total
 */
@Pipe({
  name: 'bonusComp'
})
export class BonusCompPipe implements PipeTransform {
  /**
   * Bonus de maîtrise en fonction du niveau du joueur
   * @param value Tableau des compétences du joueur
   * @param comp la compétence à tester
   */
  transform(value: Array<string>, comp:string, m:number): number {
    let n:number = 0;
    value.forEach(v => {
      if(v == comp){ n++; }
    })
    return n;
  }

}
/**
 * Afficher les trois première lettre d'un mot et le renvoyer en capitales
 */
@Pipe({
  name: 'compCarac'
})
export class CompCaracPipe implements PipeTransform {
  /**
   * Bonus de maîtrise en fonction du niveau du joueur
   * @param value Niveau du joueur
   */
  transform(value: string): string {
    return value.substr(0, 3).toUpperCase();
  }

}
