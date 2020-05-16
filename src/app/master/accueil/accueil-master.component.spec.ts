import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccueilComponent } from './accueil-master.component';

describe('MasterMasterAccueilComponent', () => {
  let component: MasterAccueilComponent;
  let fixture: ComponentFixture<MasterAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
