import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { Debounce } from 'src/app/decorators/debounce';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-project-feature-list',
  templateUrl: './project-feature-list.component.html',
  styleUrls: ['./project-feature-list.component.scss']
})
export class ProjectFeatureListComponent implements OnInit, OnDestroy {

  index = 0;
  projectFeatures: Project[];
  destroySubject$: Subject<void> = new Subject();

  constructor (
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjectFeatures();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  getProjectFeatures(): void {
    this.projectService.resetFeatureProjects();
    this.projectService.getProjectFeatures()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(projectFeatures => this.projectFeatures = projectFeatures);
  }

  nextProject(next: boolean): void {
    this.projectService.changeProject(next);
  }
}
