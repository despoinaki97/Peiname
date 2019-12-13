import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantVoteResultsComponent } from './restaurant-vote-results.component';

describe('RestaurantVoteResultsComponent', () => {
  let component: RestaurantVoteResultsComponent;
  let fixture: ComponentFixture<RestaurantVoteResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantVoteResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantVoteResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
