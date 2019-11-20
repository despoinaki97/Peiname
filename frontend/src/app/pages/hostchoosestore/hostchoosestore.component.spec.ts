import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostchoosestoreComponent } from './hostchoosestore.component';

describe('HostchoosestoreComponent', () => {
  let component: HostchoosestoreComponent;
  let fixture: ComponentFixture<HostchoosestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostchoosestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostchoosestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
