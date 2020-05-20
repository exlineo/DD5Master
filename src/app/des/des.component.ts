import { Component, OnInit } from '@angular/core';
// https://threejs.org/docs/#manual/en/introduction/Import-via-modules
import * as THREE from 'three';

// https://www.npmjs.com/package/cannon
import * as CANNON from 'cannon';
// import { Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// https://www.npmjs.com/package/threejs-dice
import * as DICE from 'threejs-dice';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {

  // Création d'une scène 3D
  scene = new THREE.Scene();

  constructor() { }

  ngOnInit(): void {
  }

}
