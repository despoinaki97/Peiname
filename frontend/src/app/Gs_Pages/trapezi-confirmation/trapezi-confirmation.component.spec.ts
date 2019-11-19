import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapeziConfirmationComponent } from './trapezi-confirmation.component';

describe('TrapeziConfirmationComponent', () => {
  let component: TrapeziConfirmationComponent;
  let fixture: ComponentFixture<TrapeziConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapeziConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapeziConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
