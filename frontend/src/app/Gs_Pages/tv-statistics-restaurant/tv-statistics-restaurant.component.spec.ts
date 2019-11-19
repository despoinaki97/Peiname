import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvStatisticsRestaurantComponent } from './tv-statistics-restaurant.component';

describe('TvStatisticsRestaurantComponent', () => {
  let component: TvStatisticsRestaurantComponent;
  let fixture: ComponentFixture<TvStatisticsRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvStatisticsRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvStatisticsRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
