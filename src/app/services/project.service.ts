import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS, MORE_PROJECTS, MORE_INFO } from '../data/projects';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectFeatures: BehaviorSubject<Project[]>;

  constructor() {
    this.projectFeatures = new BehaviorSubject<Project[]>([]);
    let newArr: Project[] = PROJECTS.slice(0, 5);
    newArr.push(MORE_PROJECTS);
    this.projectFeatures.next(newArr);
  }

  getProjectFeatures(): Observable<Project[]> {
    return this.projectFeatures.asObservable();
  }

  getProjects(): Observable<Project[]> {
    return this.projectFeatures.asObservable();
  }

  getProjectIndex(): Observable<number> {
    let project: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    this.getProjectFeatures().subscribe(projects => {
      let index: number = 1;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].state === 'show') {
          index += i;
          break;
        }
      }
      project.next(index);
    });
    return project.asObservable();
  }

  showNext(index: number): void {
    this.hideProject(index);
    this.showProject(index + 1);
    this.emitProject();
  }

  showPrev(index: number): void {
    this.hideProject(index);
    this.showProject(index - 1);
    this.emitProject();
  }

  showProject(index: number): void {
    this.projectFeatures.getValue()[index].state = 'show';
  }

  hideProject(index: number): void {
    this.projectFeatures.getValue()[index].state = 'hide';
  }

  changeProjectTo(id: number): void {
    for (let i = 0; i < this.projectFeatures.getValue().length; i++) {
      if (this.projectFeatures.getValue()[i].id === id) {
        this.showProject(i);
      }
      else {
        this.hideProject(i);
      }
    }
    this.emitProject();
  }

  changeProject(next: boolean): void {
    for (let i = 0; i < this.projectFeatures.getValue().length; i++) {
      if (this.projectFeatures.getValue()[i].state === 'show') {
        if (next && i < this.projectFeatures.getValue().length - 1) {
          this.showNext(i);
        }
        else if (!next && i > 0){
          this.showPrev(i);
        }
        break;
      }
    }
  }

  emitProject(): void {
    this.projectFeatures.next(this.projectFeatures.getValue());
  }

  getMoreInfo(): string {
    return MORE_INFO;
  }
}
