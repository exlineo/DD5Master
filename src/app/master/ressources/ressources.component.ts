import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/materiel/services/init.service';
import { WsSendI, WsSend } from 'src/app/materiel/modeles/ws-i';
import { MasterService } from '../services/master.service';
import { ScenarioI } from 'src/app/materiel/modeles/ressource-i';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  send:boolean; // Ouvrir ou fermer les options pour envoyer un message au Web Socket
  envoiWS:WsSendI;

  scenard:ScenarioI;

  constructor(public initServ:InitService, public masterServ:MasterService) { }

  ngOnInit(): void {
    this.send = false;
    this.envoiWS = new WsSend();
  }
/**
   * Envoyer des ressources au serveur WebSocket
   */
  envoiRessourceWS() {
    let d = new Date();
    this.envoiWS.date = d.getHours()+'h.'+d.getMinutes()+'mn.'+d.getSeconds()+'s';
    this.masterServ.sendRessource(this.envoiWS);
  }
  ajoutScenard(){
    
  }
}
