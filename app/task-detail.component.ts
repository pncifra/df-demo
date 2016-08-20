import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-task-detail',
  templateUrl: 'app/task-detail.component.html',
  styleUrls: ['app/task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private _taskService: TaskService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._taskService.getTask(id)
      .then(task => this.task = task);
  }

  goBack() {
    window.history.back();
  }
}
