import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesAndRsJXComponent } from './observables-and-rs-jx.component';

describe('ObservablesAndRsJXComponent', () => {
  let component: ObservablesAndRsJXComponent;
  let fixture: ComponentFixture<ObservablesAndRsJXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesAndRsJXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesAndRsJXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
