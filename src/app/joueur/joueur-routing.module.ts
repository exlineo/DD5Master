import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilJoueurComponent } from './accueil-joueur/accueil-joueur.component';
import { PersoComponent } from './perso/perso.component';
import { EditJoueurComponent } from './edit-joueur/edit-joueur.component';
import { ParamsJoueurComponent } from './params-joueur/params-joueur.component';

const routes: Routes = [
  { path:'', component:AccueilJoueurComponent, children:[
      { path:'', component:PersoComponent },
      { path:'edit', component:EditJoueurComponent },
      { path:'params', component:ParamsJoueurComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoueurRoutingModule { }
