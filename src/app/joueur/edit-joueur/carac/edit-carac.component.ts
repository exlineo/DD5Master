import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/joueur/services/perso.service';

@Component({
  selector: 'app-edit-carac',
  templateUrl: './edit-carac.component.html',
  styleUrls: ['./edit-carac.component.css']
})
export class EditCaracComponent implements OnInit {

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
  }
  /**
   * AJouter ou supprimer une compétence
   */
  changeComp(c:string, ev){
    if(!this.persoServ.perso.competences.includes(c) && ev.checked){
      this.persoServ.perso.competences.push(c);
    }else if(!ev.checked && this.persoServ.perso.competences.includes(c)){
      this.persoServ.perso.competences.splice(this.persoServ.perso.competences.indexOf(c), 1);
    }
    console.log(this.persoServ.perso.competences);
  }
  /**
   * AJouter ou supprimer une sauvegarde
   */
  changeSaves(c:string, ev){
    console.log(c, ev.checked);
    if(!this.persoServ.perso.sauvegarde.includes(c) && ev.checked){
      this.persoServ.perso.sauvegarde.push(c);
    }else if(!ev.checked && this.persoServ.perso.sauvegarde.includes(c)){
      this.persoServ.perso.sauvegarde.splice(this.persoServ.perso.sauvegarde.indexOf(c), 1);
    }
    console.log(this.persoServ.perso.sauvegarde);
  }
  /**
   * Ajouter une capacité à la feuille de perso
   * @param v Chaine de caractère à ajouter au tableau des capacités
   */
  ajoutCapacite(v:string){
    this.persoServ.perso.capacites.push(v);
  }
  /**
   * Supprimer une capacité
   * @param i Index de la chaîne à supprimer
   */
  supprCapacite(i:number){
    this.persoServ.perso.capacites.splice(i, 1);
  }
  /**
   * Ajouter une capacité à la feuille de perso
   * @param v Chaine de caractère à ajouter au tableau des capacités
   */
  ajoutLangue(v:string){
    this.persoServ.perso.langues.push(v);
  }
  /**
   * Supprimer une capacité
   * @param i Index de la chaîne à supprimer
   */
  supprLangue(i:number){
    this.persoServ.perso.langues.splice(i, 1);
  }
}
