import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgService {
  
  message$:BehaviorSubject<string> = new BehaviorSubject(''); // Gérer l'affichage des messages en retour

  constructor() { }
}
