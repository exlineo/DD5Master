import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Socket } from 'ngx-socket-io';
import { WsSendI, WsRessourceI } from '../../materiel/modeles/ws-i';

import { PersoI, Perso } from '../../materiel/modeles/perso-i';
import { ProfilI } from 'src/app/materiel/modeles/profilI';
import { RessourceI, ScenarioI, Scenard } from 'src/app/materiel/modeles/ressource-i';
import { MsgService } from 'src/app/materiel/services/msg.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  joueurs: Array<ProfilI>; // Liste des joueurs
  persos: Array<string>; // Liste des personnages
  listePersos: Array<PersoI>; // Liste des persos référencés
  listeLiens:Array<RessourceI>; // Liste des liens à partager
  listeScenars:Array<ScenarioI>; // Liste des scénarii

  constructor(private http: HttpClient, private socket: Socket, private msgServ:MsgService) {
    this.joueurs = [];
    this.persos = [];
    this.listePersos = [];
    this.listeLiens = [];
    this.listeScenars = [];
    this.getPersos();

    this.socket.on('connection', so => {
      console.log(so, so.id);
    });
    this.socket.on('connect', (id) => {
      console.log(id);
    });
    this.socket.on('masterConnecte', data => {
      console.log(data);
    });
    this.socket.on('persoRecu', data => {
      this.majPerso(data);
    });
    this.socket.on('disconnect', dis => {
      console.log(dis);
    });
  }
  /**
   * Récupérer la liste des joueurs et... des persos
   */
  getPersos() {
    this.http.get<Array<ProfilI>>('/assets/data/id/joueurs.json').subscribe(j => {
      this.joueurs = j;
      // Récupérer la liste des persos
      this.joueurs.forEach(jou => {
        this.persos = this.persos.concat(jou.persos);
      });
      // Récupérer les persos à partir de leur liste
      this.getChaquePerso();
    });
    // Charger les ressources disponibles
    this.getRessources();
  }
  /**
   * Charger tous les personnages l'un à la suite des autres
   * @param perso Le nom du personnage à charger
   */
  getChaquePerso() {
    let loads = [];
    this.persos.forEach(p => {
      loads.push(this.http.get('/assets/data/persos/' + p + '.json'));
    });
    // Joindre toutes les souscriptions des persos
    forkJoin<PersoI>(loads).subscribe(liste => {
      this.listePersos = liste;
    });
  }
  /**
   * Socket.io
   */
  idWSMaster(m: string) {
    this.socket.emit('master', { msg: m });
  }
  /**
   * Socket.io
   */
  sendRessource(m: WsSendI) {
    this.socket.emit('master', m);
  }
  /**
   * Gérer les données reçues en direct d'un perso
   * @param infos Infos reçues du serveur (id, stat, val)
   */
  majPerso(infos:any){
    console.log("recu du serveur");
    this.listePersos.forEach((el)=>{
      console.log("Websocket", el.id, infos.id);
      if(el.id == infos.id){
        if(infos.stat){
          el[infos.stat] = infos.val; // Identifier la statistique reçue du Websocket et la modifier en fonction du joueur
        }else if(infos.sort){
          el.sorts.livre[infos.index] = infos.sort;
          console.log(infos, el.sorts.livre[infos.index]);
        }
      }
    });
  }
  /**
   * Récupérer la liste des liens partageables
   */
  getRessources(){
    this.http.get<Array<RessourceI>>('/assets/data/master/ressources.json').subscribe(r => {
      this.listeLiens = r;
      // Créer une liste de scénarii
      this.listeLiens.forEach(s=>{
        this.addScenard(s[0].scenard);
      })
    })
  }
  /**
   * Ajouter une ressource à la liste
   * @param r La ressource à ajouter
   * @param i Index du tableau ou ajouter la ressource (le scénario concerné)
   */
  addRessource(r:RessourceI, i:number){
    console.log(r, i);
  }
  /**
   * Ajouter une ressource à la liste
   * @param r La ressource à ajouter
   * @param i Index du tableau ou ajouter la ressource (le scénario concerné)
   */
  addScenard(r:string){
    console.log(r);
    let scenard = new Scenard();
    scenard.nom = r;
    scenard.date = Date.now();
    this.listeScenars.push(scenard);
    console.log(this.listeScenars);
  }
  /**
   * Envoyer le tableau des ressources à l'enregistrement
   */
  valideRessources(){
    this.http.post('/assets/php/saveRessources.php', this.listeLiens).subscribe(retour => {
      this.msgServ.message$.next(retour['msg']);
    })
  }
}