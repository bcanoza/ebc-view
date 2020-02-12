import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErroViewComponent } from './form-erro-view.component';

describe('FormErroViewComponent', () => {
  let component: FormErroViewComponent;
  let fixture: ComponentFixture<FormErroViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErroViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
