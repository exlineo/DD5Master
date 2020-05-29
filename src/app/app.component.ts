import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MsgService } from './materiel/services/msg.service';
import { InitService } from './materiel/services/init.service';

import { WsSendI, WsSend } from './materiel/modeles/ws-i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ws: WsSendI;
  modale: boolean;

  constructor(public initServ: InitService, private msgServ: MsgService, private _snackBar: MatSnackBar) {
    this.ws = new WsSend();
    this.modale = false;
    /**
     * Gérer les messages de retour sur service principal et afficher un message
     */
    this.msgServ.message$.subscribe((msg) => {
      console.log(msg);
      if(typeof(msg) === 'string'){
        this.ws.msg = msg;
        this.ws.type = 'message';
      }else{
        this.ws = msg;
      }
      this.setWSMsg();
      
    });
  };
  /**
    * Gérer l'affichage de ressources reçues
    * @param msg Message reçu du master
  */
 setWSMsg() {
    switch (this.ws.type) {
      case 'message':
        this._snackBar.open(this.ws.msg, '', {
          duration: 2000,
        });
        break;
      case 'tube':
        if (this.ws.lien) {
          window.open(this.ws.lien, '_blank');
        }
        break;
      case 'lien':
      case 'image':
        if (this.ws.lien) {
          this.modale = true;
          console.log("Affichage de la modale");
        }
        break;
      case 'audio':
        break;
      case 'video':
        break;
      default:
        console.log("Le maître s'intéresse à toi");
    }
  }
  /**
   * Fermer la modale lorsqu'elle est ouverte
   * @param b Dire s'il faut fermer (bon, ça sert pas mais c'est pour l'exemple)
   */
  initModale(b: boolean) {
    this.modale = false;
    this.ws = new WsSend();
  }
}