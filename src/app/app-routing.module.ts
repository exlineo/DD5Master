import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InstallComponent } from './install/install.component';
import { Erreur404Component } from './materiel/erreur404/erreur404.component';


const routes: Routes = [
  { path:'', component:ConnexionComponent },
  { path:'installation', component:InstallComponent },
  { path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule) },
  { path: 'joueur', loadChildren: () => import('./joueur/joueur.module').then(m => m.JoueurModule) },
  { path:'**', component:Erreur404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
