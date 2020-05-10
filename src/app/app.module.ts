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
import { PersoService } from './materiel/services/perso.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InstallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterielModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InitService, MsgService, PersoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
