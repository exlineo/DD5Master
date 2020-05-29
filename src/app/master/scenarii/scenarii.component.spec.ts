import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariiComponent } from './scenarii.component';

describe('ScenariiComponent', () => {
  let component: ScenariiComponent;
  let fixture: ComponentFixture<ScenariiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenariiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenariiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
