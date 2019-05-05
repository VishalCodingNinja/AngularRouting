import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToComponentsComponent } from './introduction-to-components.component';

describe('IntroductionToComponentsComponent', () => {
  let component: IntroductionToComponentsComponent;
  let fixture: ComponentFixture<IntroductionToComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
