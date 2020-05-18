import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/joueur/services/perso.service';
import { PersoArme, PersoArmeI } from 'src/app/materiel/modeles/perso-i';

@Component({
  selector: 'app-edit-combat',
  templateUrl: './edit-combat.component.html',
  styleUrls: ['./edit-combat.component.css']
})
export class EditCombatComponent implements OnInit {

  cols:Array<string>;
  
  constructor(public initServ:InitService, public persoServ:PersoService) {
    this.cols = ['nom', 'bonusAtt', 'degats', 'bonusDeg', 'descr'];
  }

  ngOnInit(): void {
  }
  /**
   * Ajouter une arme vide à la liste des armes disponibles
   */
  ajoutArme(){
    let a:PersoArmeI = new PersoArme();
    this.persoServ.perso.armes.push(a);
  }
  /**
   * Supprimer une arme dans la liste
   * @param i Index de l'arme à supprimer
   */
  supprArme(i:number){
    this.persoServ.perso.armes.splice(i, 1);
  }

}
