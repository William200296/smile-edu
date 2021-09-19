import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectedComponent } from './student-selected.component';

describe('StudentSelectedComponent', () => {
  let component: StudentSelectedComponent;
  let fixture: ComponentFixture<StudentSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
