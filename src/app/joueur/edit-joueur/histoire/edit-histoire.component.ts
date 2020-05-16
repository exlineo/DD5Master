import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/materiel/services/perso.service';

@Component({
  selector: 'app-edit-histoire',
  templateUrl: './edit-histoire.component.html',
  styleUrls: ['./edit-histoire.component.css']
})
export class EditHistoireComponent implements OnInit {

  colsPoss:Array<string>;
  colsTresors:Array<string>;

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
    this.colsPoss = ["nom", "pds", "quantite", "descr"];
    this.colsTresors = ["nom", "magie", "quantite", "descr"];
  }

  modale(l:string){
    console.log(l);
  }
}
