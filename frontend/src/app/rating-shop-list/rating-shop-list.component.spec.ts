import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingShopListComponent } from './rating-shop-list.component';

describe('RatingShopListComponent', () => {
  let component: RatingShopListComponent;
  let fixture: ComponentFixture<RatingShopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingShopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
