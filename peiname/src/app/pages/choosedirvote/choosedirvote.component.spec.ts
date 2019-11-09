import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosedirvoteComponent } from './choosedirvote.component';

describe('ChoosedirvoteComponent', () => {
  let component: ChoosedirvoteComponent;
  let fixture: ComponentFixture<ChoosedirvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedirvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosedirvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
