import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPersoComponent } from './creer-perso.component';

describe('CreerPersoComponent', () => {
  let component: CreerPersoComponent;
  let fixture: ComponentFixture<CreerPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
