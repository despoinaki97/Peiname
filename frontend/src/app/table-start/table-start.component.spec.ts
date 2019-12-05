import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStartComponent } from './table-start.component';

describe('TableStartComponent', () => {
  let component: TableStartComponent;
  let fixture: ComponentFixture<TableStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
