import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDinamicComponent } from './select-dinamic.component';

describe('SelectDinamicComponent', () => {
  let component: SelectDinamicComponent;
  let fixture: ComponentFixture<SelectDinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDinamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
