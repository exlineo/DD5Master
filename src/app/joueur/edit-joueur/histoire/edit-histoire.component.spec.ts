import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoireComponent } from './edit-histoire.component';

describe('EditHistoireComponent', () => {
  let component: EditHistoireComponent;
  let fixture: ComponentFixture<EditHistoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
