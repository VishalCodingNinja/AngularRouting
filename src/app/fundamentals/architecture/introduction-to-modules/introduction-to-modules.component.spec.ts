import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToModulesComponent } from './introduction-to-modules.component';

describe('IntroductionToModulesComponent', () => {
  let component: IntroductionToModulesComponent;
  let fixture: ComponentFixture<IntroductionToModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
