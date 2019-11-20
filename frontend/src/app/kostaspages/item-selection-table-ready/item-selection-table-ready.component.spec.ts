import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectionTableReadyComponent } from './item-selection-table-ready.component';

describe('ItemSelectionTableReadyComponent', () => {
  let component: ItemSelectionTableReadyComponent;
  let fixture: ComponentFixture<ItemSelectionTableReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSelectionTableReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSelectionTableReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
