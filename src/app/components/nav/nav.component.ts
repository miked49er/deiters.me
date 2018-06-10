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
    this.getProjectFeatures();
  }

  getProjectFeatures(): void {
    this.projectService.getProjectFeatures()
      .subscribe(projects => {
        let index: number = 1;
        for (let i = 0; i < projects.length; i++) {
          if (projects[i].state === 'show') {
            index += i;
          }
          break;
        }
        this.project = index;
        console.log(index);
      });
  }

}
