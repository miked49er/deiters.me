import { Component, HostListener, Inject, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { DOCUMENT } from '@angular/platform-browser';
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
  scrollPosition: number = 0;
  showSlideTimer: any;
  hideSlideTimer: any;
  hideDetailsTimer: any;
  primaryTimer: any;
  private subscription: ISubscription;

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
    this.subscription.unsubscribe();
  }

  getProject(): void {
    const link: string = this.route.snapshot.paramMap.get('link');
    this.subscription = this.projectService.getProject(link)
      .subscribe(project => {
        this.project = project;
        this.project.state = 'hide';
        this.showSlideTimer = setTimeout(() => this.showSlide(), 100);
      });
  }

  hideSlide() {
    if (this.project.state === 'show') {
      this.project.state = 'hide';
      this.hideDetailsTimer = setTimeout(() => this.hideDetails = 'show', 500);
      this.primaryTimer = setTimeout(() => this.primary = true, 1000);
    }
  }

  showSlide() {
    this.project.state = 'show';
    this.hideDetails = 'hide';
    this.primary = false;
    this.hideSlideTimer = setTimeout(() => this.hideSlide(), 3000);
  }

  @HostListener('wheel', ['$event'])
  checkScroll(e) {
    if (e.deltaY > 0 && this.hideDetails === 'hide') {
      e.preventDefault();
      this.hideSlide();
    }
    else if (this.hideDetails === 'show') {
      let bottom = document.documentElement.scrollTop + document.documentElement.clientHeight == document.documentElement.scrollHeight;
      if (e.deltaY < 0 && this.scrollPosition <= 0) {
        this.showSlide();
      }
      else if (e.deltaY > 0 && bottom) {
        // TODO Add project list component
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
  }
}
