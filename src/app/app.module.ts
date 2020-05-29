import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { InstallComponent } from './install/install.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterielModule } from './materiel/materiel.module';

import { InitService } from './materiel/services/init.service';
import { MsgService } from './materiel/services/msg.service';
import { DragDropDirective } from './materiel/drag-drop.directive';
import { ModaleComponent } from './modale/modale.component';
// import { DesComponent } from './des/des.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InstallComponent,
    DragDropDirective,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterielModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[],
  providers: [InitService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
