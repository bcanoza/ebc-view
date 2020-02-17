import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditivoComponent } from './aditivo.component';

describe('AditivoComponent', () => {
  let component: AditivoComponent;
  let fixture: ComponentFixture<AditivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
