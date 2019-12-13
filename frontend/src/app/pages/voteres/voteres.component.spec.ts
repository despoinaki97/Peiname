import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteresComponent } from './voteres.component';

describe('VoteresComponent', () => {
  let component: VoteresComponent;
  let fixture: ComponentFixture<VoteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
