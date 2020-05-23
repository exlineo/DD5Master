import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { WsSendI } from 'src/app/materiel/modeles/ws-i';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  @Input()
  ws:WsSendI; // Informations à afficher dans la lightbox

  @Output() ferme = new EventEmitter<boolean>();

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log("Modale ouverte");
  }

  hideModale(){
    this.ferme.emit(false);
  }

  getType(str):string{
    return str;
  }

}
