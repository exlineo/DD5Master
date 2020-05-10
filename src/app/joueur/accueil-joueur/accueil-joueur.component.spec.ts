import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilJoueurComponent } from './accueil-joueur.component';

describe('AccueilJoueurComponent', () => {
  let component: AccueilJoueurComponent;
  let fixture: ComponentFixture<AccueilJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
