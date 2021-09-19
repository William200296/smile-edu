import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDinamicComponent } from './search-dinamic.component';

describe('SearchDinamicComponent', () => {
  let component: SearchDinamicComponent;
  let fixture: ComponentFixture<SearchDinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDinamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
