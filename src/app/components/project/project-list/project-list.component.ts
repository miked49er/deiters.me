import { Component, OnInit, HostListener, Inject, OnDestroy, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'deiters-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    trigger('scrollListOverlay', [
      state('show', style({
        transform: "translateY(0)",
        "clip-path": "polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%)"
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
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out')),
      transition('reveal => show', animate('400ms ease-in')),
      transition('reveal => hide', animate('400ms ease-out'))
    ]),
    trigger('scrollProjects', [
      state('show', style({
        display: 'flex',
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

	scrollPosition: number = 0;
  primary: boolean = false;
  projects: Project[];
  backgroundImage: string = 'assets/img/projects-bg.jpg';
  projectTitle: string;
  projectView: string = 'hide';
  projectViewTimer: any;

  @Input() slide: string = 'show';

  constructor (
    @Inject(DOCUMENT) private document: Document,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  ngOnDestroy() {
    clearTimeout(this.projectViewTimer);
  }

  getProjects(): void {
    this.projectService.getProjects()
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

  @HostListener('wheel', ['$event'])
  checkScroll(e) {
    if (e.deltaY > 0 && this.projectView === 'hide') {
      e.preventDefault();
      this.revealProjects();
    }
    else if (this.projectView === 'show') {
      if (e.deltaY < 0 && this.scrollPosition <= 0) {
        this.hideProjects();
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
  }

}