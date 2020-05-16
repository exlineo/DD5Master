import { Component, OnInit } from '@angular/core';

import { InitService } from 'src/app/materiel/services/init.service';
import { PersoService } from 'src/app/materiel/services/perso.service';

@Component({
  selector: 'app-edit-carac',
  templateUrl: './edit-carac.component.html',
  styleUrls: ['./edit-carac.component.css']
})
export class EditCaracComponent implements OnInit {

  constructor(public initServ:InitService, public persoServ:PersoService) { }

  ngOnInit(): void {
  }

}
