import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSortsComponent } from './edit-sorts.component';

describe('EditSortsComponent', () => {
  let component: EditSortsComponent;
  let fixture: ComponentFixture<EditSortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
