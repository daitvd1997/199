import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixlayoutComponent } from './fixlayout.component';

describe('FixlayoutComponent', () => {
  let component: FixlayoutComponent;
  let fixture: ComponentFixture<FixlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
