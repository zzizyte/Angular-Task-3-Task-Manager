import { Component, input } from '@angular/core';

import { TaskModel } from './task-model';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
})
export class Task {
  task = input<TaskModel>();
}
