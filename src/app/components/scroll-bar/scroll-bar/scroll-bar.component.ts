import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit, OnDestroy {

  projectFeatures: Project[];
  project = 0;
  destroySubject$: Subject<void> = new Subject();

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjectFeatures();
    this.projectService.getProjectIndex()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(index => {
        this.project = index;
      });
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  getProjectFeatures(): void {
    this.projectService.getProjectFeatures()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(projectFeatures => this.projectFeatures = projectFeatures);
  }

  hideProjects(e) {
    this.projectService.changeProjectTo(e);
  }

}
