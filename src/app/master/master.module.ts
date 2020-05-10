import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilComponent } from './accueil/accueil.component';
import { MaterielModule } from '../materiel/materiel.module';
import { MasterRoutingModule } from './master-routing.module';


@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    MaterielModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
