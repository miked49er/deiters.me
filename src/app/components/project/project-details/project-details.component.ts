import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  animateChild
} from '@angular/animations';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'deiters-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    trigger('scrollBackground', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('hide', style({
        transform: "translateY(-100%)"
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms 600ms ease-out'))
    ]),
    trigger('scrollOverlay', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('hide', style({
        transform: "translateY(-100%)"
      })),
      transition('hide => show', animate('400ms 400ms ease-in')),
      transition('show => hide', animate('400ms 400ms ease-out'))
    ]),
    trigger('scrollTitle', [
      state('show', style({
        transform: "translateX(0)",
        opacity: 1
      })),
      state('hide', style({
        transform: "translateX(-10%)",
        opacity: 0
      })),
      transition('hide => show', animate('400ms 800ms ease-in')),
      transition('show => hide', animate('400ms ease-out'))
    ]),
    trigger('revealDetails', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      state('projects', style({
        transform: "translateY(-100%)"
      })),
      state('details', style({
        transform: "translateY(0)"
      })),
      transition('hide => show', animate('400ms 300ms ease-in')),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => projects', animate('400ms ease-in')),
      transition('show => projects', animate('400ms ease-out')),
      transition('projects => details', animate('400ms ease-in')),
      transition('details => hide', animate('400ms ease-out'))
    ])
  ]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project: Project;
  primary: boolean;
  hideDetails: string;
  showSlideTimer: any;
  hideSlideTimer: any;
  hideDetailsTimer: any;
  moreProjectsTimer: any;
  primaryTimer: any;
  destroySubject$: Subject<void> = new Subject();

  moreProjects: string;
  projectList: string;
  moreProjectsTitle: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(() => {
        this.getProject();
      });
  }

  ngOnDestroy(): void {
    this.cleanUp();
    this.destroySubject$.next();
  }

  cleanUp(): void {
    clearTimeout(this.showSlideTimer);
    clearTimeout(this.hideSlideTimer);
    clearTimeout(this.primaryTimer);
    clearTimeout(this.hideDetailsTimer);
    clearTimeout(this.moreProjectsTimer);
  }

  getProject(): void {
    const link: string = this.route.snapshot.paramMap.get('link');
    this.projectService.getProject(link)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(project => {
        this.moreProjects = 'hide';
        this.projectList = 'hide';
        this.project = project;
        this.project.state = 'hide';
        this.showSlideTimer = setTimeout(() => this.showSlide(), 100);
      });
    this.moreProjectsTitle = this.projectService.getMoreProjectsTitle();
  }

  hideSlide() {
    clearTimeout(this.hideSlideTimer);
    if (this.project.state === 'show') {
      this.project.state = 'hide';
      this.hideDetailsTimer = setTimeout(() => this.hideDetails = 'show', 500);
      this.primaryTimer = setTimeout(() => this.primary = false, 1000);
    }
  }

  showSlide() {
    clearTimeout(this.hideDetailsTimer);
    clearTimeout(this.primaryTimer);
    this.project.state = 'show';
    this.hideDetails = 'hide';
    this.primary = this.project.primary;
    this.hideSlideTimer = setTimeout(() => this.hideSlide(), 3000);
  }

  showProjectTitle() {
    this.moreProjects = 'show';
  }

  revealProjectList() {
    this.moreProjectsTimer = setTimeout(() => {
      this.moreProjects = 'hide';
      this.projectList = 'show';
    }, 1000);
    this.primaryTimer = setTimeout(() => this.primary = true, 2000);
  }

  hideProjectList() {
    this.moreProjects = 'hide';
    this.projectList = 'hide';
    this.primaryTimer = setTimeout(() => this.primary = false, 1000);
  }
}
