import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

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
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectLinkComponent } from './components/project/project-link/project-link.component';
import { AboutComponent } from './components/about/about.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { WheelScrollDirective } from './directives/wheel-scroll.directive';
import { WheelDirective } from './directives/wheel.directive';

const routes: Routes = [
  { path: '', component: ProjectFeatureListComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:link', component: ProjectDetailsComponent },
  { path: 'about', component: AboutComponent }
];

export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer.Manager(element, {
      touchAction: 'auto',
      recognizers: [
        [Hammer.Pan, { direction: Hammer.DIRECTION_VERTICAL}],
      ]
    });

    return mc;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProjectFeatureComponent,
    ProjectFeatureListComponent,
    NavComponent,
    ScrollButtonComponent,
    ScrollBarComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectLinkComponent,
    AboutComponent,
    SocialLinkComponent,
    WheelScrollDirective,
    WheelDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
