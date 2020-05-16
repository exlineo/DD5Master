import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { PersoService } from '../../materiel/services/perso.service';

import { Socket } from 'ngx-socket-io';
import { WsSendI, WsSend } from 'src/app/materiel/modeles/ws-i';

@Component({
  selector: 'app-accueil-joueur',
  templateUrl: './accueil-joueur.component.html',
  styleUrls: ['./accueil-joueur.component.css']
})
export class AccueilJoueurComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void; // écouteur du menu

  modale:boolean;
  srcAudio:string;
  srcVideo:string;

  constructor(public persoServ: PersoService, public initServ: InitService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private socket: Socket) {
    
    this.persoServ.getPerso(this.initServ.profil.persos[0]);
    this.initServ.sendMsg('Chargement des données du personnage');

    this.modale = false;

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
      this.getWSMsg(msg);
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
   * Gérer l'affichage de ressources reçues
   * @param msg Message reçu du master
   */
  getWSMsg(msg:WsSendI){
    switch(msg.type){
      case 'message':
        this.initServ.sendMsg(msg.msg);
        break;
      case 'lien':
      case 'tube':
      case 'image':
        if(msg.lien){
          window.open(msg.lien, '_blank');
        }
        break;
      // case 'image':
      //   this.modale = true;
      //   break;
      case 'audio':
        this.srcAudio = msg.lien;
        this.srcVideo = null;
        break;
      case 'video':
        this.srcAudio = null;
        this.srcVideo = msg.lien;
        break;
      default:
        
        console.log("Le maître s'intéresse à toi");
    }
    
  }
}
