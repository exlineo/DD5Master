import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/materiel/services/perso.service';

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

}
