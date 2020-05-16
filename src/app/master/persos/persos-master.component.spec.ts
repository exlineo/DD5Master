import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPersosComponent } from './persos-master.component';

describe('MasterPersoComponent', () => {
  let component: MasterPersosComponent;
  let fixture: ComponentFixture<MasterPersosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPersosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPersosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
