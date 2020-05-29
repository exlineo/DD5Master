import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

import { EditCaracComponent } from './edit-joueur/carac/edit-carac.component';
import { EditCombatComponent } from './edit-joueur/combat/edit-combat.component';
import { EditHistoireComponent } from './edit-joueur/histoire/edit-histoire.component';
import { EditSortsComponent } from './edit-joueur/sorts/edit-sorts.component';

import { environment } from '../../environments/environment';
import { EditJoueurComponent } from './edit-joueur/edit-joueur.component';
import { ParamsJoueurComponent } from './params-joueur/params-joueur.component';
import { PersoService } from './services/perso.service';
import { SortNivPipe } from '../materiel/pipes/sorts-msg.pipe';

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
    SortsComponent,
    EditCaracComponent,
    EditCombatComponent,
    EditHistoireComponent,
    EditSortsComponent,
    EditJoueurComponent,
    ParamsJoueurComponent,
    SortNivPipe
  ],
  providers:[PersoService],
  imports: [
    CommonModule,
    JoueurRoutingModule,
    FormsModule,
    MaterielModule,
    SocketIoModule.forRoot(config)
  ]
})
export class JoueurModule { }
