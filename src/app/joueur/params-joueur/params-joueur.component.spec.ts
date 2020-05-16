import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsJoueurComponent } from './params-joueur.component';

describe('ParamsJoueurComponent', () => {
  let component: ParamsJoueurComponent;
  let fixture: ComponentFixture<ParamsJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
