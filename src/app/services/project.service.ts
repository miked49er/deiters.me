import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS, MORE_PROJECTS } from '../data/projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectFeatures: Project[];

  constructor() {
    this.projectFeatures = PROJECTS.slice(0, 5);
    this.projectFeatures.push(MORE_PROJECTS);
  }

  getProjectFeatures(): Observable<Project[]> {
    return of(this.projectFeatures);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projectFeatures);
  }

  showNext(index: number): void {
    this.hideProject(index);
    this.showProject(index + 1);
  }

  showPrev(index: number): void {
    this.hideProject(index);
    this.showProject(index - 1);
  }

  showProject(index: number): void {
    this.projectFeatures[index].state = 'show';
  }

  hideProject(index: number): void {
    this.projectFeatures[index].state = 'hide';
  }

  changeProjectTo(id: number): void {
    for (let i = 0; i < this.projectFeatures.length; i++) {
      if (this.projectFeatures[i].id === id) {
        this.showProject(i);
      }
      else {
        this.hideProject(i);
      }
    }
  }

  changeProject(next: boolean): void {
    for (let i = 0; i < this.projectFeatures.length; i++) {
      if (this.projectFeatures[i].state === 'show') {
        if (next && i < this.projectFeatures.length - 1) {
          this.showNext(i);
        }
        else if (!next && i > 0){
          this.showPrev(i);
        }
        break;
      }
    }
  }
}
