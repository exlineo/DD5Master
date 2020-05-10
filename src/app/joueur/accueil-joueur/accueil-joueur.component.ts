import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { InitService } from '../../materiel/services/init.service';
import { PersoService } from '../../materiel/services/perso.service';

@Component({
  selector: 'app-accueil-joueur',
  templateUrl: './accueil-joueur.component.html',
  styleUrls: ['./accueil-joueur.component.css']
})
export class AccueilJoueurComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void; // écouteur du menu

  constructor(public persoServ:PersoService, public initServ:InitService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    console.log(this.initServ.profil);
    this.persoServ.getPerso(this.initServ.profil.perso);
    this.initServ.sendMsg('Chargement des données du personnage');
    
    // Menu matériel
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(){

  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
