import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayShapeComponent } from './overlay-shape.component';

describe('OverlayShapeComponent', () => {
  let component: OverlayShapeComponent;
  let fixture: ComponentFixture<OverlayShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
