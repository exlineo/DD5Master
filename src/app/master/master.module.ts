import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielModule } from '../materiel/materiel.module';
import { MasterRoutingModule } from './master-routing.module';

import { MasterAccueilComponent } from './accueil/accueil-master.component';
import { MasterPersosComponent } from './persos/persos-master.component';

import { MasterService } from './services/master.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '.././../environments/environment';
import { ParamsComponent } from './params/params.component';
import { CreerPersoComponent } from './creer-perso/creer-perso.component';
import { AccentsPipe } from '../materiel/pipes/accents.pipe';
import { RessourcesComponent } from './ressources/ressources.component';
import { ScenariiComponent } from './scenarii/scenarii.component';

const config: SocketIoConfig = { url: environment.WS, options: {} };

@NgModule({
  declarations: [
    MasterAccueilComponent,
    MasterPersosComponent,
    ParamsComponent,
    CreerPersoComponent,
    AccentsPipe,
    RessourcesComponent,
    ScenariiComponent
  ],
  providers:[MasterService],
  imports: [
    CommonModule,
    MaterielModule,
    MasterRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ]
})
export class MasterModule { }
