import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/materiel/services/perso.service';
import { InitService } from 'src/app/materiel/services/init.service';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {

  constructor(public persoServ:PersoService, public initServ:InitService) {}

  ngOnInit(): void {
  }

}
