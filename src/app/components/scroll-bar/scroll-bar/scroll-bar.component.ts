import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'deiters-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit {
  @Input() projectFeatures;

  constructor() { }

  ngOnInit() {
  }

  hideProjects(e) {
    for (let projectFeature of this.projectFeatures) {
      if (projectFeature.id !== e) {
        projectFeature.state = 'hide';
      }
    }
  }

}
