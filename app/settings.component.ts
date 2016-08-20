import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';
import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning';

@Component({
  selector: 'my-settings',
  templateUrl: 'app/settings.component.html',
  directives: [NGL_DIRECTIVES],
})
export class SettingsComponent implements OnInit {

//   constructor(
//     private _settingsService: SettingsService) {
//   }

  ngOnInit() {
      // grab all the preferences
  }

}