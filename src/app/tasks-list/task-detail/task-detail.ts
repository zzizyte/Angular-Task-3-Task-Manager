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
  newStatusTask = output<TaskModel['status']>();
  loggingService = inject(LoggingService);

  isDone() {
    const newStatus: TaskModel['status'] = this.task()?.status === 'todo' ? 'done' : 'todo';
    this.newStatusTask.emit(newStatus);
  }
  ngOnDestroy() {
    this.loggingService.onDestructLog();
  }
}
