import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/materiel/services/perso.service';
import { InitService } from 'src/app/materiel/services/init.service';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {

  colsPoss:Array<string>;
  colsTresors:Array<string>;

  constructor(public persoServ:PersoService, public initServ:InitService) {}

  ngOnInit(): void {
    this.colsPoss = ["nom", "pds", "quantite", "descr"];
    this.colsTresors = ["nom", "magie", "quantite", "descr"];
  }

  modale(l:string){
    console.log(l);
  }

}
