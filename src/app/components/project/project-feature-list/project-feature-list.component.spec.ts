import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjectFeatureListComponent } from './project-feature-list.component';

describe('ProjectFeatureListComponent', () => {
  let component: ProjectFeatureListComponent;
  let fixture: ComponentFixture<ProjectFeatureListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFeatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
