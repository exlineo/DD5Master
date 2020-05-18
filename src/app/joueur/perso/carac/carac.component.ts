import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/joueur/services/perso.service';
import { InitService } from 'src/app/materiel/services/init.service';

@Component({
  selector: 'app-carac',
  templateUrl: './carac.component.html',
  styleUrls: ['./carac.component.css']
})
export class CaracComponent implements OnInit {

  constructor(public persoServ:PersoService, public initServ:InitService) {}

  ngOnInit(): void {
    console.log("Compétences", this.initServ.regles['competences']);
  }

}
