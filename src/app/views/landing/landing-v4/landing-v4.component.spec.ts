import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV4Component } from './landing-v4.component';

describe('LandingV4Component', () => {
  let component: LandingV4Component;
  let fixture: ComponentFixture<LandingV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
