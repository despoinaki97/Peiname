import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateofrestComponent } from './stateofrest.component';

describe('StateofrestComponent', () => {
  let component: StateofrestComponent;
  let fixture: ComponentFixture<StateofrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateofrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateofrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
