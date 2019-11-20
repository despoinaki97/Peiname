import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteRestTableComponent } from './vote-rest-table.component';

describe('VoteRestTableComponent', () => {
  let component: VoteRestTableComponent;
  let fixture: ComponentFixture<VoteRestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteRestTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteRestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
