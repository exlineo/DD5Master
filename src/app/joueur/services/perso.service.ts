import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { PersoI, Perso, PersoLivreI } from '../../materiel/modeles/perso-i';
import { MsgService } from '../../materiel/services/msg.service';

import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class PersoService {

  perso:PersoI;

  constructor(private http:HttpClient, private msgServ:MsgService, private socket:Socket) {
    this.perso = new Perso();
  }
  /**
   * Charger les données d'un personnage
   * @param p Nom du personnage à charger
   */
  getPerso(p:string='defaut'){
    this.http.get<PersoI>('assets/data/persos/'+p+'.json').subscribe(ps => {
      this.perso = ps;
      this.msgServ.message$.next("Personnage chargé, rock'n'roll");
    })
  }
  /**
   * Sauvegarder l'évolution du personnage
   */
  savePerso(){
    this.http.post('assets/php/savePerso.php', this.perso).subscribe(retour => {
      this.msgServ.message$.next(retour['msg']);
    })
  }
  /**
   * Envoyer les modifications du personnage par Websocket
   * @param stat La chaîne de caractère de la statistique modifiée en direct
   */
  WSEnvoiPerso(stat:string){
    let val = this.perso[stat];
    let persoSend = {
      id:this.perso.id,
      stat,
      val
    }
    this.socket.emit('persoEnvoi', persoSend);
  }
  /**
   * Envoyer les modifications du personnage par Websocket
   * @param stat La chaîne de caractère de la statistique modifiée en direct
   */
  WSEnvoiSort(sort:PersoLivreI, index:number){
    console.log(sort, index);
    let persoSend = {
      id:this.perso.id,
      sort:sort,
      index
    }
    this.socket.emit('persoEnvoi', persoSend);
  }
  
}
