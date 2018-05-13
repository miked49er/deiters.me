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
    trigger('scrollAnimation', [
      state('show', style({
        transform: "translateY(0)"
      })),
      state('hide', style({
        transform: "translateY(100%)"
      })),
      transition('hide => show', animate('200ms ease-in')),
      transition('show => hide', animate('200ms ease-out'))
    ])
  ]
})
export class ProjectFeatureComponent {
  @Input() projectFeature;

  constructor() { }

}
