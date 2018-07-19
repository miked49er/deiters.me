import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { Debounce } from 'src/app/decorators/debounce';

@Component({
  selector: 'deiters-project-feature-list',
  templateUrl: './project-feature-list.component.html',
  styleUrls: ['./project-feature-list.component.scss']
})
export class ProjectFeatureListComponent implements OnInit {

  index = 0;
  projectFeatures: Project[];
  timer;

  constructor (
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.getProjectFeatures();
  }

  getProjectFeatures(): void {
    this.projectService.resetFeatureProjects();
    this.projectService.getProjectFeatures()
      .subscribe(projectFeatures => this.projectFeatures = projectFeatures);
  }

  nextProject(next: boolean): void {
    this.projectService.changeProject(next);
  }
}
