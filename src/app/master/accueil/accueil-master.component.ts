import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { MasterService } from '../services/master.service';
import { WsSendI, WsSend } from 'src/app/materiel/modeles/ws-i';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil-master.component.html',
  styleUrls: ['./accueil-master.component.css']
})
export class MasterAccueilComponent implements OnInit, OnDestroy {
  // Mobile
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  send:boolean; // Ouvrir ou fermer les options pour envoyer un message au Web Socket
  envoiWS:WsSendI;

  r:string; // Route vers laquelle se rendre sur une sélection
  perso:string; // Le nom du personnage à éditer

  constructor(public initServ: InitService, public masterServ: MasterService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.send = false;
    this.envoiWS = new WsSend();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  /**
   * Envoyer des ressources au serveur WebSocket
   */
  envoiRessourceWS() {
    let d = new Date();
    this.envoiWS.date = d.getHours()+'h.'+d.getMinutes()+'mn.'+d.getSeconds()+'s';
    this.masterServ.sendRessource(this.envoiWS);
  }
  /**
   * Envoyer des informations au serveur WebSocket
   */
  ouvrirDialogue(data: any) {
    
  }
  /**
   * Sélectionner une option pour s'y rendre
   * @param r Adresse de la route à atteindre
   */
  optionRoute(){
    console.log(this.r);
    this.route.navigateByUrl(this.r);
  }
  /**
   * Des options de gestion des personnages
   * @param option L'option reçue de la liste déroulante
   */
  optionPersos(option:string){
    switch(option){
      case "rechargePersos":
        this.masterServ.getChaquePerso();
      break;
    }

  }
  affichePerso(){
    console.log(this.r);
    // this.route.navigateByUrl('this.r');
  }
}