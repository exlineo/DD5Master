import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { MasterService } from '../services/master.service';
import { WsSendI, WsSend } from 'src/app/materiel/modeles/ws-i';


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

  constructor(public initServ: InitService, public masterServ: MasterService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
    this.masterServ.sendRessource(this.envoiWS);
  }
  /**
   * Envoyer des informations au serveur WebSocket
   */
  ouvrirDialogue(data: any) {
    
  }
}