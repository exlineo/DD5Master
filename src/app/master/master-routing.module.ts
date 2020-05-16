import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterAccueilComponent } from './accueil/accueil-master.component';
import { MasterPersosComponent } from './persos/persos-master.component';


const routes: Routes = [
  { path:'', component:MasterAccueilComponent, children:[
      { path:'', component:MasterPersosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
