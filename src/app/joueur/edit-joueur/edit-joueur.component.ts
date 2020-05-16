import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/materiel/services/perso.service';

@Component({
  selector: 'app-edit-joueur',
  templateUrl: './edit-joueur.component.html',
  styleUrls: ['./edit-joueur.component.css']
})
export class EditJoueurComponent implements OnInit {

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
  }

}
