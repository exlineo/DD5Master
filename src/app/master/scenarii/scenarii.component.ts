import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/materiel/services/init.service';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-scenarii',
  templateUrl: './scenarii.component.html',
  styleUrls: ['./scenarii.component.css']
})
export class ScenariiComponent implements OnInit {

  constructor(public initServ:InitService,public masterServ:MasterService) { }

  ngOnInit(): void {
  }
}
