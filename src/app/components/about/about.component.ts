import { Component, OnInit } from '@angular/core';
import { transition, animate, state, style, trigger } from '@angular/animations';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'deiters-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
    trigger('scrollAbout', [
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
export class AboutComponent implements OnInit {

  primary: boolean = false;
  backgroundImage: string = "assets/img/about-bg.jpg";
  name: string;
  job: string;
  slide: string = 'hide';
  info: string = 'hide';
  slideViewTimer: any;
  aboutViewTimer: any;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.name = this.projectService.getNameAscii();
    this.job = this.projectService.getJobAscii();
    this.slideViewTimer = setTimeout(() => this.slide = 'show', 100);
  }

  revealAbout() {
    this.slide = 'reveal';
    this.aboutViewTimer = setTimeout(() => {
      this.info = 'show';
      this.primary = true;
    }, 500);
  }

  hideAbout() {
    clearTimeout(this.aboutViewTimer);
    this.slide = 'show';
    this.info = 'hide';
    this.primary = false;
  }
}
