import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilJoueurComponent } from './accueil-joueur/accueil-joueur.component';
import { PersoComponent } from './perso/perso.component';


const routes: Routes = [
  { path:'', component:AccueilJoueurComponent, children:[
      {path:'', component:PersoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueurRoutingModule { }
