import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss'],
  animations: [
    trigger('scrollListOverlay', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('reveal', style({
        "clip-path": "polygon(70% -40%, 100% -24%, 100% 100%, 0 100%, 0 0)"
      })),
      state('hide', style({
        transform: "translateY(100%)",
        display: "none"
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('hide => reveal', animate('400ms ease-in')),
      transition('show => reveal', animate('400ms ease-in')),
      transition('reveal => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out')),
      transition('reveal => hide', animate('400ms ease-out'))
    ]),
    trigger('scrollListTitle', [
      state('show', style({
        transform: "translateX(0)",
        opacity: 1,
        display: "block"
      })),
      state('reveal', style({
        transform: "translateX(10%)",
        opacity: 0,
        display: "none"
      })),
      state('hide', style({
        transform: "translateX(10%)",
        opacity: 0,
        display: "none"
      })),
      transition('hide => show', animate('400ms 400ms ease-in')),
      transition('hide => reveal', animate('400ms ease-in')),
      transition('show => reveal', animate('400ms ease-in')),
      transition('reveal => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out')),
      transition('reveal => hide', animate('400ms ease-out'))
    ]),
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
export class ProjectListViewComponent implements OnInit {

    primary: boolean = false;
    projects: Project[];
    backgroundImage: string = 'assets/img/projects-bg.jpg';
    projectTitle: string;
    projectView: string = 'hide';
    slideViewTimer: any;
    projectViewTimer: any;
    destroySubject$: Subject<void> = new Subject();

    @Input() slide: string = 'hide';

    constructor (
      private projectService: ProjectService
    ) { }

    ngOnInit() {
      this.slideViewTimer = setTimeout(() => this.slide = 'show', 100);
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
      this.projectTitle = this.projectService.getProjectsTitle();
    }

    revealProjects() {
      this.slide = 'reveal';
      this.projectViewTimer = setTimeout(() => this.projectView = 'show', 500);
    }

    hideProjects() {
      this.slide = 'show';
      this.projectView = 'hide';
    }
}