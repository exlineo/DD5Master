import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  connexion:any;

  constructor() {
    /**
     * Objet pour la saisie de l'identification de connextion
     */
    this.connexion = {
      id:'',
      mdp:''
    }
  }
}
