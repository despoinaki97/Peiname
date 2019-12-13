import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectionTableLoadComponent } from './item-selection-table-load.component';

describe('ItemSelectionTableLoadComponent', () => {
  let component: ItemSelectionTableLoadComponent;
  let fixture: ComponentFixture<ItemSelectionTableLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSelectionTableLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSelectionTableLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
