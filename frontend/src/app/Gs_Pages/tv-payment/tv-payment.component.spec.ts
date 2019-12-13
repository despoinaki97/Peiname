import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPaymentComponent } from './tv-payment.component';

describe('TvPaymentComponent', () => {
  let component: TvPaymentComponent;
  let fixture: ComponentFixture<TvPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
