import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoueurRoutingModule } from './joueur-routing.module';
import { AccueilJoueurComponent } from './accueil-joueur/accueil-joueur.component';
import { PersoComponent } from './perso/perso.component';
import { MaterielModule } from '../materiel/materiel.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.WS, options: {} };

import { BonusCaracPipe, BonusMaitrisePipe, CompCaracPipe, BonusCompPipe } from '../materiel/pipes/bonus.pipe';
import { CaracComponent } from './perso/carac/carac.component';
import { CombatComponent } from './perso/combat/combat.component';
import { HistoireComponent } from './perso/histoire/histoire.component';
import { SortsComponent } from './perso/sorts/sorts.component';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AccueilJoueurComponent,
    PersoComponent,
    BonusCaracPipe,
    BonusMaitrisePipe,
    CompCaracPipe,
    BonusCompPipe,
    CaracComponent,
    CombatComponent,
    HistoireComponent,
    SortsComponent],
  imports: [
    CommonModule,
    JoueurRoutingModule,
    MaterielModule,
    SocketIoModule.forRoot(config)
  ]
})
export class JoueurModule { }
