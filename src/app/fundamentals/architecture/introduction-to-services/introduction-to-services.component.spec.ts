import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToServicesComponent } from './introduction-to-services.component';

describe('IntroductionToServicesComponent', () => {
  let component: IntroductionToServicesComponent;
  let fixture: ComponentFixture<IntroductionToServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
