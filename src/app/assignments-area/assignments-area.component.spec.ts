import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsAreaComponent } from './assignments-area.component';

describe('AssignmentsAreaComponent', () => {
  let component: AssignmentsAreaComponent;
  let fixture: ComponentFixture<AssignmentsAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentsAreaComponent]
    });
    fixture = TestBed.createComponent(AssignmentsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
