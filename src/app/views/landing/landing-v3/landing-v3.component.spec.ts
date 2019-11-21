import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV3Component } from './landing-v3.component';

describe('LandingV3Component', () => {
  let component: LandingV3Component;
  let fixture: ComponentFixture<LandingV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
