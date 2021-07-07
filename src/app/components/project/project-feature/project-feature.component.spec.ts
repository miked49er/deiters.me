import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectFeatureComponent } from './project-feature.component';

describe('ProjectFeatureComponent', () => {
  let component: ProjectFeatureComponent;
  let fixture: ComponentFixture<ProjectFeatureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
