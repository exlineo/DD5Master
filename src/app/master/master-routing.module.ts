import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterAccueilComponent } from './accueil/accueil-master.component';
import { MasterPersosComponent } from './persos/persos-master.component';
import { CreerPersoComponent } from './creer-perso/creer-perso.component';
import { ParamsComponent } from './params/params.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ScenariiComponent } from './scenarii/scenarii.component';


const routes: Routes = [
  { path:'', component:MasterAccueilComponent, children:[
      { path:'', component:MasterPersosComponent},
      { path:'creer', component:CreerPersoComponent},
      { path:'params', component:ParamsComponent },
      { path:'scenarii', component:ScenariiComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
