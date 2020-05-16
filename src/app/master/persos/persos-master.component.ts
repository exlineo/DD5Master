import { Component, OnInit } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-persos',
  templateUrl: './persos-master.component.html',
  styleUrls: ['./persos-master.component.css']
})
export class MasterPersosComponent implements OnInit {

  panelOpenState:boolean = false;
  colsArmes:Array<string>;
  colsSorts:Array<string>;

  constructor(public initServ:InitService, public masterServ:MasterService) { }

  ngOnInit(): void {
    this.colsArmes = ['nom', 'bonusAtt', 'degats', 'bonusDeg', 'descr'];
    this.colsSorts  = ['niveau', 'nom', 'duree', 'tpsInc'];
  }

}
