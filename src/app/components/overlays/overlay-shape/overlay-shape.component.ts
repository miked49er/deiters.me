import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'deiters-overlay-shape',
  templateUrl: './overlay-shape.component.html',
  styleUrls: ['./overlay-shape.component.scss'],
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
    ])
  ]
})
export class OverlayShapeComponent implements OnInit {

    @Input() slide: string;
    @Input() title: string;
    @Input() primary: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
