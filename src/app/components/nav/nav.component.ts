import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  project: number;
  @Input() dynamic: boolean = false;
  @Input() primary: boolean = false;
  @Input() accent: boolean = false;
  destroySubject$: Subject<void> = new Subject();

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    if (this.dynamic) {
      this.projectService.getProjectIndex()
        .pipe(takeUntil(this.destroySubject$))
        .subscribe(index => {
          this.project = index;
        });
    }
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }
}
