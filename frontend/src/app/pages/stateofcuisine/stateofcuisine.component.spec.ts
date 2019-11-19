import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateofcuisineComponent } from './stateofcuisine.component';

describe('StateofcuisineComponent', () => {
  let component: StateofcuisineComponent;
  let fixture: ComponentFixture<StateofcuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateofcuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateofcuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
