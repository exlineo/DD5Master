import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MsgService {
  
  message$:BehaviorSubject<any> = new BehaviorSubject(''); // Gérer l'affichage des messages en retour

  constructor() { }
}
