import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'deiters-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
  animations: [
    trigger('scrollBar', [
      state('show', style({
        transform: "scale(1)"
      })),
      state('hide', style({
        transform: "scale(.5)"
      })),
      transition('hide => show', animate('400ms ease-in')),
      transition('show => hide', animate('400ms ease-out'))
    ])
  ]
})
export class ScrollButtonComponent implements OnInit {
  @Input() projectFeature;
  @Input() project;
  @Output() projectChange = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  scrollBarButton() {
    this.projectChange.next(this.projectFeature.id);
  }

}
