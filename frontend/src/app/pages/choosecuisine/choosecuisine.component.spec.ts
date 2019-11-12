import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecuisineComponent } from './choosecuisine.component';

describe('ChoosecuisineComponent', () => {
  let component: ChoosecuisineComponent;
  let fixture: ComponentFixture<ChoosecuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosecuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
