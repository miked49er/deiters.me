import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'deiters-project-link',
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss']
})
export class ProjectLinkComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
