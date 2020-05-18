import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/joueur/services/perso.service';

import { PersoI, Perso } from 'src/app/materiel/modeles/perso-i';

@Component({
  selector: 'app-creer-perso',
  templateUrl: './creer-perso.component.html',
  styleUrls: ['./creer-perso.component.css']
})
export class CreerPersoComponent implements OnInit {

  perso:PersoI;

  constructor(public initServ:InitService, private persoServ:PersoService) { }

  ngOnInit(): void {
    this.perso = new Perso();
  }
  creePerso(){
    // this.perso.id = this.perso.nom.replace(/[^a-zA-Z0-9]/g,'_').replace(/_{2,}/g,'_').toLocaleLowerCase();
    this.initServ.creePerso(this.perso);
  }
}
