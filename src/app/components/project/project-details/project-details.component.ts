import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/interfaces/project';

import {
  trigger,
  state,
  style,
  animate,
  transition
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
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('hide => show', animate('400ms 300ms ease-in')),
      transition('show => hide', animate('400ms ease-out'))
    ])
  ]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project: Project;
  primary: boolean = false;
  hideDetails: string = 'hide';
  showSlideTimer: any;
  hideSlideTimer: any;
  hideDetailsTimer: any;
  primaryTimer: any;
  destroySubject$: Subject<void> = new Subject();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProject();
  }

  ngOnDestroy(): void {
    clearTimeout(this.showSlideTimer);
    clearTimeout(this.hideSlideTimer);
    clearTimeout(this.primaryTimer);
    clearTimeout(this.hideDetailsTimer);
    this.destroySubject$.next();
  }

  getProject(): void {
    const link: string = this.route.snapshot.paramMap.get('link');
    this.projectService.getProject(link)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(project => {
        this.project = project;
        this.project.state = 'hide';
        this.showSlideTimer = setTimeout(() => this.showSlide(), 100);
      });
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
}
