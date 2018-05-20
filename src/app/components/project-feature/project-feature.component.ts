import { Component, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'deiters-project-feature',
  templateUrl: './project-feature.component.html',
  styleUrls: ['./project-feature.component.scss'],
  animations: [
    trigger('scrollBackground', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('hide', style({
        transform: "translateY(100%)"
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms 600ms ease-out'))
    ]),
    trigger('scrollOverlay', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('hide', style({
        transform: "translateY(100%)"
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
        transform: "translateX(10%)",
        opacity: 0
      })),
      transition('hide => show', animate('400ms 800ms ease-in')),
      transition('show => hide', animate('400ms ease-out'))
    ])
  ]
})
export class ProjectFeatureComponent {
  @Input() projectFeature;

  constructor() { }

}
