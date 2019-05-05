import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAndTemplatesComponent } from './components-and-templates.component';

describe('ComponentsAndTemplatesComponent', () => {
  let component: ComponentsAndTemplatesComponent;
  let fixture: ComponentFixture<ComponentsAndTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsAndTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsAndTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
