import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Socket } from 'ngx-socket-io';
import { WsSendI } from '../../materiel/modeles/ws-i';

import { PersoI, Perso } from '../../materiel/modeles/perso-i';
import { ProfilI } from 'src/app/materiel/modeles/profilI';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  joueurs:Array<ProfilI>; // Liste des joueurs
  persos:Array<string>; // Liste des personnages
  listePersos:Array<PersoI>;

  constructor(private http:HttpClient, private socket: Socket) {
    this.joueurs = [];
    this.persos = [];
    this.listePersos = []
    this.getPersos();

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
  /**
   * Récupérer la liste des joueurs et... des persos
   */
  getPersos(){
    this.http.get<Array<ProfilI>>('/assets/data/id/joueurs.json').subscribe(j => {
      this.joueurs = j;
      // Récupérer la liste des persos
      this.joueurs.forEach(jou => {
        this.persos = this.persos.concat(jou.persos);
      });
      // Récupérer les persos à partir de leur liste
      this.getChaquePerso();
    });
    
  }
  /**
   * Charger tous les personnages l'un à la suite des autres
   * @param perso Le nom du personnage à charger
   */
  getChaquePerso(){
    let loads = [];
    this.persos.forEach(p => {
      loads.push(this.http.get('/assets/data/persos/'+p+'.json'));
    });
    // Joindre toutes les souscriptions des persos
    forkJoin<PersoI>(loads).subscribe(liste => {
      this.listePersos = liste;
    });

  }
  /**
   * Socket.io
   */
  idWSMaster(m:string){
    this.socket.emit('master', { msg:m });
  }
  /**
   * Socket.io
   */
  sendRessource(m:WsSendI){
    this.socket.emit('master', m);
  }
  /**
   * Récupérer un message envoyé du serveur
   */
  public getMessages = () => {
    return Observable.create((observer) => {
            this.socket.on('masterConnecte', (message) => {
                observer.next(message);
            });
    });
  }
}
