import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitchartComponent } from './sitchart.component';

describe('SitchartComponent', () => {
  let component: SitchartComponent;
  let fixture: ComponentFixture<SitchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
