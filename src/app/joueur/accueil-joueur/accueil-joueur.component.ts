import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { PersoService } from '../../materiel/services/perso.service';

import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accueil-joueur',
  templateUrl: './accueil-joueur.component.html',
  styleUrls: ['./accueil-joueur.component.css']
})
export class AccueilJoueurComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void; // écouteur du menu

  constructor(public persoServ: PersoService, public initServ: InitService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private socket:Socket) {
    console.log(this.initServ.profil);
    this.persoServ.getPerso(this.initServ.profil.persos[0]);
    this.initServ.sendMsg('Chargement des données du personnage');

    // Menu matériel
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.socket.on('connection', so => {
      console.log(so, so.id);
    });
    this.socket.on('connect', (id)=>{
      console.log(id);
  });
    this.socket.on('masterConnecte', data => {
      console.log(data);
    });
    this.socket.on('disconnect', dis=>{
      console.log(dis);
    });

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  public getMessages = () => {
    return Observable.create((observer) => {
            this.socket.on('masterConnecte', (message) => {
                observer.next(message);
            });
    });
}
}
