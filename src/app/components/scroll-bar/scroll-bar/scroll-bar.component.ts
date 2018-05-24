import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'deiters-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.scss']
})
export class ScrollBarComponent implements OnInit {

  projectFeatures: Project[];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjectFeatures();
  }

  getProjectFeatures(): void {
    this.projectService.getProjectFeatures()
      .subscribe(projectFeatures => this.projectFeatures = projectFeatures);
  }

  hideProjects(e) {
    this.projectService.changeProjectTo(e);
  }

}
