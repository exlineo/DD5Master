import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersoI, Perso } from '../modeles/perso-i';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  perso:PersoI;

  constructor(private http:HttpClient, private msgServ:MsgService) {
    this.perso = new Perso();
    console.log("Initialisation du perso", this.perso);
  }
  /**
   * Charger les données d'un personnage
   * @param p Nom du personnage à charger
   */
  getPerso(p:string='defaut'){
    this.http.get<PersoI>('/assets/data/persos/'+p+'.json').subscribe(ps => {
      this.perso = ps;
      console.log("Perso chargé", this.perso, this.perso.carac);
      this.msgServ.message$.next("Personnage chargé, rock'n'roll");
    })
  }
  /**
   * Sauvegarder l'évolution du personnage
   */
  savePerso(){
    this.http.post('assets/php/savePerso.php', this.perso).subscribe(retour => {
      console.log(retour);
      this.msgServ.message$.next(JSON.stringify(retour));
    })
  }
}
