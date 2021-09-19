import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOutletComponent } from './card-outlet.component';

describe('CardOutletComponent', () => {
  let component: CardOutletComponent;
  let fixture: ComponentFixture<CardOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
