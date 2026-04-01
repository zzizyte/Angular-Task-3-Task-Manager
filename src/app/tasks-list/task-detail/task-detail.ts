import { Component, inject, input, output } from '@angular/core';

import { TaskModel } from '../task/task-model';
import { LoggingService } from '../../logging.service';
import { CapitalizePipe } from '../../Capitalize.pipe';

@Component({
  selector: 'app-task-detail',
  imports: [CapitalizePipe],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.scss',
})
export class TaskDetail {
  task = input<TaskModel>();
  newStatusTask = output<TaskModel>();
  loggingService = inject(LoggingService);

  isDone() {
    const currentTask = this.task();

    if (!currentTask) return;

    const newStatus: TaskModel['status'] = currentTask.status === 'todo' ? 'done' : 'todo';
    const newTask: TaskModel = {
      ...currentTask,
      status: newStatus,
    };
    this.newStatusTask.emit(newTask);
  }
  ngOnDestroy() {
    this.loggingService.onDestructLog();
  }
}
