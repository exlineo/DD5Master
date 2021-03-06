import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ProfilI } from '../modeles/profilI';
import { ReglesI } from '../modeles/regles-i';
import { WsSendI, WsSend } from '../modeles/ws-i';

import { MsgService } from './msg.service';
import { PersoI } from '../modeles/perso-i';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class InitService {

  connexion: any; // identifiants de connexion par défaut
  lang: string; // La langue choisie
  traductions: Array<any>; // Liste des traductions
  profil: ProfilI; // Profil du joueur
  regles: ReglesI; // Les règles du jeu
  listeMsg: Array<WsSendI>;
  ws:WsSendI;
  des: boolean = false;

  accents = [
    /[\300-\306]/g, /[\340-\346]/g, // A, a
    /[\310-\313]/g, /[\350-\353]/g, // E, e
    /[\314-\317]/g, /[\354-\357]/g, // I, i
    /[\322-\330]/g, /[\362-\370]/g, // O, o
    /[\331-\334]/g, /[\371-\374]/g, // U, u
    /[\321]/g, /[\361]/g, // N, n
    /[\307]/g, /[\347]/g, // C, c
    / /g
  ];
  noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c', '_'];

  constructor(private http: HttpClient, private router: Router, public msgServ: MsgService) {
    /**
     * Objet pour la saisie de l'identification de connextion
     */
    this.connexion = {
      id: '',
      mdp: '',
      statut: 'joueur'
    };
    this.ws = new WsSend();
    // Initialisation la liste des messages reçus par les joueurs
    localStorage.getItem('listeMsg') ? this.listeMsg = JSON.parse(localStorage.getItem('listeMsg')) : this.listeMsg = [];

    this.getTraductions();
  }
  /**
   * Récupérer la langue du local storage
   */
  getLangue() {
    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
    } else {
      this.lang = "fr";
    }
  }
  /**
   * Récupérer les traductions de l'interface
   */
  getTraductions() {
    this.getLangue(); // Langue en cours
    this.http.get<Array<any>>("assets/data/traductions/interface_" + this.lang + ".json").subscribe(t => {
      this.traductions = t;
      this.msgServ.message$.next('Traductions chargée... chargement des règles...');
      this.getRegles();
    })
  }
  /**
   * Récupérer les règles
   */
  getRegles() {
    this.http.get<ReglesI>("assets/data/regles/regles_" + this.lang + ".json").subscribe(r => {
      this.regles = r;
      this.msgServ.message$.next('Règles chargées...');

    })
  }
  /** 
   * Connecter un utilisateur si son ID existe en localStorage
   */
  testConnexionLocal() {
    // Récupérer le profil si il est enregistré
    if (localStorage.getItem("id")) {
      this.profil = JSON.parse(localStorage.getItem("id"));
    }

    if (this.profil.statut == 'master') {
      this.connexion.statut = true;
    }
    this.testConnexion();
  }
  /**
   * Vérifier les identifiants
   */
  testConnexion() {
    this.msgServ.message$.next('Tentative de connexion...');
    // Test local ou prod
    environment.production ? this.getProfil() : this.getID();
  }
  /**
   * Télécharger le fichier d'identifiants (sera corrigé dans une phase ultérieure pour sécuriser)
   * @param origine Fichier à télécharger
   */
  getID(origine: string = null) {
    this.http.get<ProfilI>("assets/data/id/profil_" + this.connexion.id + '@' + this.connexion.mdp + ".json").subscribe(pro => {
      this.setProfil(pro);
    },
      error => {
        this.msgServ.message$.next('Aie, erreur dans la connexion... essaies encore');
      });
  }
  /**
   * Récupérer le profil à partir de PHP pour sécuriser les accès
   */
  getProfil() {
    this.http.post<ProfilI>("assets/php/getProfil.php", this.connexion).subscribe(pro => {
      console.log("PHP Profil", pro);
      this.setProfil(pro);
    },
      error => {
        this.msgServ.message$.next('Aie, erreur dans la connexion... essaies encore');
      });
  }
  setProfil(pro:ProfilI){
    this.profil = pro;
    this.msgServ.message$.next('Bienvenue ' + this.profil.nom);
    this.router.navigateByUrl('/' + this.profil.statut);
    // Stocker les identifiants
    localStorage.setItem("id", JSON.stringify(this.profil));
  }
  /**
   * Envoyer un message d'information sur ce qu'il se passe
   * @param msg Message transmis
   */
  sendMsg(msg: any) {
    this.msgServ.message$.next(msg);
  }
  /**
   * Liste des messages reçus en WebSocket
   * @param msg Message à sauvegarder
   */
  setListeMsg(msg: WsSendI) {
    this.listeMsg.push(msg);
    this.msgServ.message$.next(msg);
    this.storeListeMsg();
  }
  /**
   * Supprimer un message dans la liste
   * @param i Index du message à supprimer
   */
  supprMsg(i: number) {
    this.listeMsg.splice(i, 1);
    this.storeListeMsg();
  }
  /**
   * Stocker des donnée en local
   */
  storeListeMsg() {
    localStorage.setItem("listeMsg", JSON.stringify(this.listeMsg));
  }
  /**
   * Créer un nouveau joueur dans la liste des joueurs
   * @param j Profil du joueur à créer
   */
  creeJoueur(j: ProfilI) {

  }
  /**
     * Sauvegarder l'évolution du personnage
     */
  creePerso(p: PersoI) {
    p.id = this.filtreNoms(p.nom);
    this.http.post('assets/php/savePerso.php', p).subscribe(retour => {
      this.msgServ.message$.next(JSON.stringify(retour));
    })
  }
  /**
   * Enlever les accents du nom du personnage
   * @param str Chaîne de caractère à traduire
   */
  filtreNoms(str) {
    for (var i = 0; i < this.accents.length; i++) {
      str = str.replace(this.accents[i], this.noaccent[i]);
    }
    return str;
  }
}
