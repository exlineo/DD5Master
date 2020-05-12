import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/materiel/services/perso.service';
import { InitService } from 'src/app/materiel/services/init.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  cols:Array<string>;

  constructor(public persoServ:PersoService, public initServ:InitService) {}

  ngOnInit(): void {
    this.cols = ['nom', 'bonusAtt', 'degats', 'bonusDeg', 'descr'];
  }

}
