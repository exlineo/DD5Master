import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracComponent } from './carac.component';

describe('CaracComponent', () => {
  let component: CaracComponent;
  let fixture: ComponentFixture<CaracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
