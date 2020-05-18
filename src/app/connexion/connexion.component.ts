import { Component, OnInit } from '@angular/core';
import { InitService } from '../materiel/services/init.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(public initServ:InitService) { }

  ngOnInit(): void {
    // this.initServ.testConnexionLocal();
  }
}
