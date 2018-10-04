import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    trigger('scrollProjects', [
      state('show', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      state('hide', style({
        display: 'none',
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out'))
    ])
  ]
})
export class ProjectListComponent implements OnInit, OnDestroy {

  projects: Project[];
  projectViewTimer: any;
  destroySubject$: Subject<void> = new Subject();

  @Input() projectView: string = 'hide';

  constructor (
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  ngOnDestroy() {
    clearTimeout(this.projectViewTimer);
    this.destroySubject$.next();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(projects => this.projects = projects);
  }

  revealProjects() {
    this.projectViewTimer = setTimeout(() => this.projectView = 'show', 500);
  }

  hideProjects() {
    this.projectView = 'hide';
  }
}
