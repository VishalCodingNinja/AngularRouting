import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToTemplateComponent } from './introduction-to-template.component';

describe('IntroductionToTemplateComponent', () => {
  let component: IntroductionToTemplateComponent;
  let fixture: ComponentFixture<IntroductionToTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
