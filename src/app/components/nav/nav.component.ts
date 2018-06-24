import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'deiters-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  project: number;
  @Input() ascii: boolean;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjectIndex()
      .subscribe(index => {
        this.project = index;
      });
  }
}
