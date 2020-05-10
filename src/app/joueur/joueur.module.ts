import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoueurRoutingModule } from './joueur-routing.module';
import { AccueilJoueurComponent } from './accueil-joueur/accueil-joueur.component';
import { PersoComponent } from './perso/perso.component';
import { MaterielModule } from '../materiel/materiel.module';

import { BonusCaracPipe, BonusMaitrisePipe } from '../materiel/pipes/bonus.pipe';


@NgModule({
  declarations: [
    AccueilJoueurComponent,
    PersoComponent,
    BonusCaracPipe,
    BonusMaitrisePipe],
  imports: [
    CommonModule,
    JoueurRoutingModule,
    MaterielModule
  ]
})
export class JoueurModule { }
