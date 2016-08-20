import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';
import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [NGL_DIRECTIVES],
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  totalPoints: number = 0;

  constructor(
    private _router: Router,
    private _taskService: TaskService) {
  }

  ngOnInit() {
    this._taskService.getTasks()
      .then(tasks => { this.tasks = tasks.filter(task => task.completed), this.getTotalPoints() });
  }
  
  getTotalPoints() {
    this.tasks.forEach(task => this.totalPoints += task.points);
  }
  
  getPercent() {
    let percent = this.totalPoints/100 * 100 < 100 ? this.totalPoints/100 * 100 : 100;
    return percent + '%';
  }
}
