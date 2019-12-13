import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvStatisticsCuisineComponent } from './tv-statistics-cuisine.component';

describe('TvStatisticsCuisineComponent', () => {
  let component: TvStatisticsCuisineComponent;
  let fixture: ComponentFixture<TvStatisticsCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvStatisticsCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvStatisticsCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
