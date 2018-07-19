import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS, MORE_INFO, PROJECTS_TITLE, NAME_ASCII, JOB_ASCII } from '../data/projects';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project: BehaviorSubject<Project>;
  projects: BehaviorSubject<Project[]>;
  projectFeatures: BehaviorSubject<Project[]>;

  constructor() {
    this.project = new BehaviorSubject<Project>(PROJECTS[0]);
    this.projects = new BehaviorSubject<Project[]>([]);
    this.projectFeatures = new BehaviorSubject<Project[]>([]);
    this.projects.next(PROJECTS);
    let newArr: Project[] = PROJECTS.slice(0, 5);
    this.projectFeatures.next(newArr);
  }

  getProjectFeatures(): Observable<Project[]> {
    return this.projectFeatures.asObservable();
  }

  getProjects(): Observable<Project[]> {
    return this.projects.asObservable();
  }

  getProject(link: string): Observable<Project> {
    this.updateProject(link);
    return this.project.asObservable();
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

  updateProject(link: string) {
    this.getProjects().subscribe(projects => {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].link === link) {
          this.project.next(projects[i]);
          break;
        }
      }
    });
  }

  showNext(index: number): void {
    this.hideFeatureProject(index);

    if (index + 1 < this.projectFeatures.getValue().length) {
      this.showFeatureProject(index + 1);
    }
    else {
      this.showFeatureProject(0);
    }
    this.emitProject();
  }

  showPrev(index: number): void {
    this.hideFeatureProject(index);

    if (index - 1 >= 0) {
      this.showFeatureProject(index - 1);
    }
    else {
      this.showFeatureProject(this.projectFeatures.getValue().length - 1);
    }
    this.emitProject();
  }

  showFeatureProject(index: number): void {
    this.projectFeatures.getValue()[index].state = 'show';
  }

  hideFeatureProject(index: number): void {
    this.projectFeatures.getValue()[index].state = 'hide';
  }

  resetFeatureProjects(): void {
    for (let i = 0; i < this.projectFeatures.getValue().length; i++) {
      this.hideFeatureProject(i);
    }
    this.showFeatureProject(0);
  }

  changeProjectTo(id: number): void {
    for (let i = 0; i < this.projectFeatures.getValue().length; i++) {
      if (this.projectFeatures.getValue()[i].id === id) {
        this.showFeatureProject(i);
      }
      else {
        this.hideFeatureProject(i);
      }
    }
    this.emitProject();
  }

  changeProject(next: boolean): void {
    for (let i = 0; i < this.projectFeatures.getValue().length; i++) {
      if (this.projectFeatures.getValue()[i].state === 'show') {
        if (next) {
          this.showNext(i);
        }
        else {
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

  getProjectsTitle(): string {
    return PROJECTS_TITLE;
  }

  getNameAscii(): string {
    return NAME_ASCII;
  }

  getJobAscii(): string {
    return JOB_ASCII;
  }
}
