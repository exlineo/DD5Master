import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// https://threejs.org/docs/#manual/en/introduction/Import-via-modules
import * as THREE from 'three';
// import * as DragControls from 'src/assets/js/DragControls';
// import * as DragControls from 'three/examples/js/controls/DragControls';
import DragControls from 'three-dragcontrols';

// https://www.npmjs.com/package/cannon
import * as CANNON from 'cannon';
// import { Scene } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// https://www.npmjs.com/package/threejs-dice
import { DiceManager, DiceD4, DiceD6, DiceD8, DiceD10, DiceD12, DiceD20 } from 'threejs-dice';
import { InitService } from '../materiel/services/init.service';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {

  full: boolean = true;
  des: Array<any>;
  deOp: { size: number, font: string, back: string };
  @ViewChild('plateaudes', { static: false }) plateau: ElementRef;

  // Création d'une scène 3D
  scene: any;
  camera: any;
  rendu: any;
  world: any;
  dragControls: any;
  // light:any;

  d4: DiceD4;
  d6: DiceD6;
  d8: DiceD8;
  d10: DiceD10;
  d12: DiceD12;
  d20: DiceD20;

  pos: { x: number, y: number, l: number, h: number };

  constructor(private initServ: InitService, private htmlRendu: Renderer2) { }

  ngOnInit(): void {
    this.deOp = { size: 50, font: "#000000", back: '#FFFFFF' };
    this.pos = { x: (window.innerWidth / 2), y: (window.innerHeight / 2), l: window.innerWidth - 100, h: window.innerHeight - 100 };
    this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera( 45, this.pos.l / this.pos.h, 0.1, 1000 );
    this.camera = new THREE.OrthographicCamera(this.pos.l / - 2, this.pos.l / 2, this.pos.h / 2, this.pos.h / -2, 1, 1000);
    // this.camera.target.set( 0, 0, 0 );

    this.rendu = new THREE.WebGLRenderer({ alpha: true });
    this.rendu.setSize(this.pos.l, this.pos.h);
    this.rendu.setClearColor(0x000000, 0.4);
    this.rendu.shadowMap.enabled = true;
    this.rendu.shadowMap.type = THREE.PCFSoftShadowMap;

    this.world = new CANNON.World();
    this.world.gravity.set(0, 0, -9.8 * 20);
    // this.world.broadphase = new CANNON.NaiveBroadphase();
    // this.world.solver.iterations = 16;
    DiceManager.setWorld(this.world);

    this.d4 = new DiceD4({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    this.d6 = new DiceD6({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    this.d8 = new DiceD8({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    this.d10 = new DiceD10({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    this.d12 = new DiceD12({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    this.d20 = new DiceD20({ size: this.deOp.size, fontColor: this.deOp.font, backColor: this.deOp.back });
    // Tableau des dés
    this.des = [this.d4, this.d6, this.d8, this.d10, this.d12, this.d20];
    // this.des = [this.d4];
  }


  ngAfterViewInit() {
    this.htmlRendu.appendChild(this.plateau.nativeElement, this.rendu.domElement);
    // this.rendu.domElement.addEventListener("click", () => {
    //   let selectedObject;
    //   let raycaster = new THREE.Raycaster();
    //   // function onclick(event) {
    //   let mouse = new THREE.Vector2();
    //   raycaster.setFromCamera(mouse, this.camera);
    //   // this.des.forEach(d => {
    //   let intersects = raycaster.intersectObjects(this.scene.children);
    //   console.log(intersects, this.scene.children);
    //   if (intersects.length > 0) {
    //     selectedObject = intersects[0];
    //     console.log(selectedObject);
    //   }
    //   // });
    // });

    this.scene.add(this.camera);

    // Les ajouter à la scène et préparer l'ensemble
    let y_tmp = (this.pos.h / 2) - 250;
    let x_tmp = -this.des.length * 60;
    this.des.forEach(d => {
      this.scene.add(d.getObject());
      d.getObject().position.x = x_tmp;
      d.getObject().position.y = this.pos.y - 200;
      d.getObject().position.z = -100;
      // d.getObject().rotation.x = 50 * Math.PI / 180;
      d.updateBodyFromMesh();
      // DiceManager.prepareValues([{ dice:d, value:1 }]);
      x_tmp += 120;
    });

    let ambient = new THREE.AmbientLight('#ffffff', 0.3);
    this.scene.add(ambient);
    // Lumières à ajouter
    let light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 150, 100);
    light.castShadow = true;
    this.scene.add(light);

    let light2 = new THREE.PointLight(0xffffff, 1);
    light2.castShadow = true;
    light2.position.set(400, 150, 100);
    this.scene.add(light2);

    let light3 = new THREE.PointLight(0xffffff, 1);
    light3.castShadow = true;
    light3.position.set(-this.pos.x, this.pos.y, 100);
    this.scene.add(light3);
    this.animate();

    this.dragControls = new DragControls(this.scene.children, this.camera, this.rendu.domElement);
    this.dragControls.addEventListener('dragstart', (ev) => {
      // this.dragControls.enabled = false;
      console.log("Drag commence", ev.object, this);
      let d = ev.object;
      let randX = Math.random() * 5;
      let randY = Math.random() * 20;
      d.getObject().body.velocity.set(25 + randX, 40 + randY * 20, 15 + randX);
      d.getObject().body.angularVelocity.set(20 * Math.random() -10, 20 * Math.random() -10, 20 * Math.random() -10);
      
    });
    this.dragControls.addEventListener('dragend', (ev) => {
      this.dragControls.enabled = true;
      console.log("drag fini", ev, this);
    });
  }
  /**
   * Boucle d'animation du canvas
   */
  animate = () => {
    this.world.step(1 / 60); // this.world.step(1.0 / 60.0)
    this.des.forEach(d => {
      // console.log(d);
      d.updateMeshFromBody();
      // DiceManager.prepareValues([{ dice:d, value:1 }]);
    })
    this.rendu.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }
}
