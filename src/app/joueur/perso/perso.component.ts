import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/materiel/services/perso.service';
import { InitService } from 'src/app/materiel/services/init.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent implements OnInit {

  constructor(public persoServ:PersoService, public initServ:InitService) {
    console.log(this.persoServ.perso);
  }

  ngOnInit(): void {
  }

}
