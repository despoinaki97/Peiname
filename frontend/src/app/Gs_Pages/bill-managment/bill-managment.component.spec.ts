import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillManagmentComponent } from './bill-managment.component';

describe('BillManagmentComponent', () => {
  let component: BillManagmentComponent;
  let fixture: ComponentFixture<BillManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
