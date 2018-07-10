import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectFeatureComponent } from './components/project/project-feature/project-feature.component';
import { ProjectFeatureListComponent } from './components/project/project-feature-list/project-feature-list.component';
import { NavComponent } from './components/nav/nav.component';
import { ScrollButtonComponent } from './components/scroll-bar/scroll-button/scroll-button.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar/scroll-bar.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';

const routes: Routes = [
  { path: '', component: ProjectFeatureListComponent },
  { path: 'projects/', component: ProjectFeatureListComponent },
  { path: 'projects/:link', component: ProjectDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectFeatureComponent,
    ProjectFeatureListComponent,
    NavComponent,
    ScrollButtonComponent,
    ScrollBarComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
