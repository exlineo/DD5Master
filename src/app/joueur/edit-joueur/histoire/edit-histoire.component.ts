import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/joueur/services/perso.service';
import { PersoPossessionI, PersoPossession, PersoTresorI, PersoTresor } from 'src/app/materiel/modeles/perso-i';

@Component({
  selector: 'app-edit-histoire',
  templateUrl: './edit-histoire.component.html',
  styleUrls: ['./edit-histoire.component.css']
})
export class EditHistoireComponent implements OnInit {

  colsPoss:Array<string>;
  colsTresors:Array<string>;
  files: any = [];

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
    this.colsPoss = ["nom", "pds", "quantite", "descr"];
    this.colsTresors = ["nom", "magie", "quantite", "descr"];
  }

  modale(l:string){
    console.log(l);
  }

 /**
   * Ajouter une possession vide à la liste des armes disponibles
   */
  ajoutPoss(){
    let p:PersoPossessionI = new PersoPossession();
    this.persoServ.perso.possessions.push(p);
  }
  /**
   * Supprimer une possession dans la liste
   * @param i Index de la possession à supprimer
   */
  supprPoss(i:number){
    this.persoServ.perso.possessions.splice(i, 1);
  }
  /**
   * Ajouter un trésor vide à la liste des armes disponibles
   */
  ajoutTresor(){
    let t:PersoTresorI = new PersoTresor();
    this.persoServ.perso.tresors.push(t);
  }
  /**
   * Supprimer un trésor dans la liste
   * @param i Index du trésor à supprimer
   */
  supprTresor(i:number){
    this.persoServ.perso.tresors.splice(i, 1);
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
}
