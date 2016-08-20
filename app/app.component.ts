import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Router } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { SettingsComponent } from './settings.component';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from './task.service';
import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning'; 

@Component({
  selector: 'my-app',
  template: `
  <div class="site-masthead">
    <h1>
      <svg aria-hidden="true" class="slds-icon--large slds-icon-text-default">
          <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#paste"></use>
       </svg>
       Task Tracker
   </h1>
  </div>
  <div>
    <div>
      <ngl-tabs [(selected)]="selectedTab" [type]="type">
        <ngl-tab nglTabId="Tasks">
          <template ngl-tab-heading>
             <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
               <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#check"></use>
             </svg>
             <a [routerLink]="['Tasks']">Tasks</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Dashboard">
          <template ngl-tab-heading>
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
               <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#metrics"></use>
             </svg>
             <a [routerLink]="['Dashboard']">Dashboard</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Settings">
          <template ngl-tab-heading>
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
               <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#custom_apps"></use>
             </svg>
             <a [routerLink]="['Settings']">Settings</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
      </ngl-tabs>
    </div>
  </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, NGL_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TaskService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsComponent
  },
    {
    path: '/detail/:id',
    name: 'TaskDetail',
    component: TaskDetailComponent
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Task Helper';
  type: string = 'scoped';
  selectedTab: any = 'Tasks';
  
  constructor(
    private _router: Router) {
  }

//TODO: use the new router and look into RouterSegement component 
  ngOnInit() {
    //this.selectedTab = this._router
  }
}

