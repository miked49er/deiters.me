import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrollButtonComponent } from './scroll-button.component';

describe('ScrollButtonComponent', () => {
  let component: ScrollButtonComponent;
  let fixture: ComponentFixture<ScrollButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
