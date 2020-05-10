import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersoI } from '../modeles/perso-i';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  perso:PersoI;

  constructor(private http:HttpClient, private msgServ:MsgService) { }
  /**
   * Charger les données d'un personnage
   * @param p Nom du personnage à charger
   */
  getPerso(p:string='defaut'){
    this.http.get<PersoI>('/assets/data/persos/'+p+'.json').subscribe(ps => {
      console.log("Perso chargé", ps);
      this.perso = ps;
      this.msgServ.message$.next("Personnage chargé, rock'n'roll");
    })
  }
}
