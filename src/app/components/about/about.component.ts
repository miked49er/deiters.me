import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { transition, animate, state, style, trigger } from '@angular/animations';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'deiters-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
      transition('hide => show', animate('400ms 400ms ease-in')),
      transition('hide => reveal', animate('400ms ease-in')),
      transition('show => reveal', animate('400ms ease-in')),
      transition('reveal => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out')),
      transition('reveal => hide', animate('400ms ease-out'))
    ]),
    trigger('scrollAbout', [
      state('show', style({
        display: 'block',
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
export class AboutComponent implements OnInit {

	scrollPosition: number = 0;
  primary: boolean = false;
  backgroundImage: string = "assets/img/projects-bg.jpg";
  name: string;
  job: string;
  slide: string = 'hide';
  info: string = 'hide';
  slideViewTimer: any;
  aboutViewTimer: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.name = this.projectService.getNameAscii();
    this.job = this.projectService.getJobAscii();
    this.slideViewTimer = setTimeout(() => this.slide = 'show', 100);
  }

  revealAbout() {
    this.slide = 'reveal';
    this.aboutViewTimer = setTimeout(() => this.info = 'show', 500);
  }

  hideAbout() {
    this.slide = 'show';
    this.info = 'hide';
  }

  @HostListener('wheel', ['$event'])
  checkScroll(e) {
    if (e.deltaY > 0 && this.info === 'hide') {
      e.preventDefault();
      this.revealAbout();
    }
    else if (this.info === 'show') {
      if (e.deltaY < 0 && this.scrollPosition <= 0) {
        this.hideAbout();
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
  }

}
