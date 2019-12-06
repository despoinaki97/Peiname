import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVoteCompletedComponent } from './table-vote-completed.component';

describe('TableVoteCompletedComponent', () => {
  let component: TableVoteCompletedComponent;
  let fixture: ComponentFixture<TableVoteCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVoteCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVoteCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
