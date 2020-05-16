import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaracComponent } from './edit-carac.component';

describe('EditCaracComponent', () => {
  let component: EditCaracComponent;
  let fixture: ComponentFixture<EditCaracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
