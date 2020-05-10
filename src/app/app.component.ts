import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MsgService } from './materiel/services/msg.service';
import { InitService } from './materiel/services/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private msgServ:MsgService, private _snackBar:MatSnackBar) {
    /**
     * Gérer les messages de retour sur service principal et afficher un message
     */
    this.msgServ.message$.subscribe((msg)=>{
      this._snackBar.open(msg,'',{
        duration: 2000,
      });
    });
  }

 
}