import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'deiters-project-list-view',
  templateUrl: './project-list-view.component.html',
  styleUrls: ['./project-list-view.component.scss']
})
export class ProjectListViewComponent implements OnInit {

    primary: boolean = false;
    projects: Project[];
    backgroundImage: string = 'assets/img/projects-bg.jpg';
    projectTitle: string;
    projectView: string = 'hide';
    slideViewTimer: any;
    projectViewTimer: any;

    @Input() slide: string = 'hide';

    constructor (
      private projectService: ProjectService
    ) { }

    ngOnInit() {
      this.slideViewTimer = setTimeout(() => this.slide = 'show', 100);
      this.projectTitle = this.projectService.getProjectsTitle();
    }

    ngOnDestroy() {
      clearTimeout(this.projectViewTimer);
    }

    revealProjects() {
      this.slide = 'reveal';
      this.projectViewTimer = setTimeout(() => this.projectView = 'show', 500);
    }

    hideProjects() {
      this.slide = 'show';
      this.projectView = 'hide';
    }
}
