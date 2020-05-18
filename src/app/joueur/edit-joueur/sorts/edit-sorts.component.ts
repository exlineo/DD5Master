import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/joueur/services/perso.service';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

import { PersoLivreI, PersoLivre } from 'src/app/materiel/modeles/perso-i';

@Component({
  selector: 'app-edit-sorts',
  templateUrl: './edit-sorts.component.html',
  styleUrls: ['./edit-sorts.component.css']
})
export class EditSortsComponent implements OnInit {

  cols:Array<string>;
  selection:SelectionModel<PersoLivreI> = new SelectionModel<PersoLivreI>(true, []);
  dataSource:MatTableDataSource<PersoLivreI>;

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
    this.cols = ['select', 'niveau', 'nom', 'bonusAtt', 'degats', 'bonusDeg', 'duree', 'tpsInc', 'aire', 'descr'];
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.persoServ.perso.sorts.livre.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.persoServ.perso.sorts.livre.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PersoLivreI): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.appris}`;
  }

  /**
   * Ajouter une arme vide à la liste des armes disponibles
   */
  ajoutSort(){
    let a:PersoLivreI = new PersoLivre();
    this.persoServ.perso.sorts.livre.push(a);
  }
  /**
   * Ajouter un niveau de sorts
   */
  ajoutNiveauSort(){
    this.persoServ.perso.sorts.nombre.push(0);
  }
  /**
   * Supprimer une arme dans la liste
   * @param i Index de l'arme à supprimer
   */
  supprSort(i:number){
    this.persoServ.perso.sorts.livre.splice(i, 1);
  }
}
