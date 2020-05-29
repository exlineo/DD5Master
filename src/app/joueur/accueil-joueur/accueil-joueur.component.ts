import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { PersoService } from '../services/perso.service';

import { Socket } from 'ngx-socket-io';
import { WsSendI, WsSend } from 'src/app/materiel/modeles/ws-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-joueur',
  templateUrl: './accueil-joueur.component.html',
  styleUrls: ['./accueil-joueur.component.css']
})
export class AccueilJoueurComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void; // écouteur du menu

  persoChoisi:string;

  constructor(public persoServ: PersoService, public initServ: InitService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private socket: Socket, private route:Router) {
    
    this.persoServ.getPerso(this.initServ.profil.persos[0]);
    this.initServ.sendMsg('Chargement des données du personnage');

    // Menu matériel
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    /** connexion au Websocket */
    this.socket.on('connection', so => {
      console.log(so, so.id);
    });
    /** Le joueur est connecté */
    this.socket.on('connect', (id) => {
      console.log("Joueur connecté");
    });
    /** Recueillir les informations transmises par le maître de jeu */
    this.socket.on('masterConnecte', msg => {
      this.initServ.setListeMsg(msg);
    });
    /** Le joueur s'est déconnecté */
    this.socket.on('disconnect', dis => {
      console.log("Joueur déconnecté");
    });

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  /**
   * Chargement d'un personnage et retour à la route du personnage
   */
  selectPerso(){
    if(this.persoServ.perso.id != this.persoChoisi && this.persoChoisi != "null"){
      this.persoServ.getPerso(this.persoChoisi);
    }
    // Aller à la page du perso
    this.route.navigateByUrl('/joueur');
  }
}
