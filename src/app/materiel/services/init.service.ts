import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfilI } from '../modeles/profilI';
import { ReglesI } from '../modeles/regles-i';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  connexion:any; // identifiants de connexion par défaut
  lang:string; // La langue choisie
  traductions:Array<any>; // Liste des traductions
  profil:ProfilI; // Profil du joueur
  regles:ReglesI; // Les règles du jeu

  constructor(private http:HttpClient, private router:Router, public msgServ:MsgService) {
    /**
     * Objet pour la saisie de l'identification de connextion
     */
    this.connexion = {
      id:'',
      mdp:'',
      statut:false
    };
    this.getTraductions();
  }
  /**
   * Récupérer la langue du local storage
   */
  getLangue(){
    if(localStorage.getItem("lang")){
      this.lang = localStorage.getItem("lang");
    }else{
      this.lang = "fr";
    }
  }
  /**
   * Récupérer les traductions de l'interface
   */
  getTraductions(){
    this.getLangue(); // Langue en cours
    this.http.get<Array<any>>("assets/data/traductions/interface_"+this.lang+".json").subscribe(t => {
      this.traductions = t;
      this.msgServ.message$.next('Traductions chargée... chargement des règles...');
      this.getRegles();
    })
  }
  /**
   * Récupérer les règles
   */
  getRegles(){
    this.http.get<ReglesI>("assets/data/regles/regles_"+this.lang+".json").subscribe(r => {
      this.regles = r;
      this.msgServ.message$.next('Règles chargées...');

    })
  }
  /**
   * Vérifier les identifiants
   */
  testConnexion(){
    this.msgServ.message$.next('Tentative de connexion...');

    this.connexion.statut ? this.getID('master') : this.getID('joueurs');
    console.log("Tentative de connexion");
  }
  /**
   * Télécharger le fichier d'identifiants (sera corrigé dans une phase ultérieure pour sécuriser)
   * @param origine Fichier à télécharger
   */
  getID(origine:string){
    this.http.get<Array<any>>("assets/data/id/"+origine+".json").subscribe(i => {
      if(i.find(p => p.id == this.connexion.id && p.mdp == this.connexion.mdp)){
        this.profil = i.find(p => p.id == this.connexion.id && p.mdp == this.connexion.mdp);
        this.msgServ.message$.next('Bienvenue '+this.profil.id);
        this.connexion.statut ? this.router.navigateByUrl('master') : this.router.navigateByUrl('joueur');;
      }else{
        this.msgServ.message$.next('Aie, erreur dans la connexion... essaies encore');
      }
    });
  }
  /**
   * Envoyer un message d'information sur ce qu'il se passe
   * @param msg Message transmis
   */
  sendMsg(msg:string){
    this.msgServ.message$.next(msg);
  }
}
