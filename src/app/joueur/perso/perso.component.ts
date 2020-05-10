import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/materiel/services/perso.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent implements OnInit {

  constructor(private persoServ:PersoService) { }

  ngOnInit(): void {
  }

}
