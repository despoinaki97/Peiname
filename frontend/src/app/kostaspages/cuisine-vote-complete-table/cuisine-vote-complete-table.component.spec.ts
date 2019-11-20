import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineVoteCompleteTableComponent } from './cuisine-vote-complete-table.component';

describe('CuisineVoteCompleteTableComponent', () => {
  let component: CuisineVoteCompleteTableComponent;
  let fixture: ComponentFixture<CuisineVoteCompleteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineVoteCompleteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineVoteCompleteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
