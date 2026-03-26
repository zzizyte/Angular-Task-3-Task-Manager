import { Component, inject } from '@angular/core';
import { DUMMY_TASKS } from '../../DUMMY-TASKS';
import { Task } from './task/task';
import { TaskDetail } from './task-detail/task-detail';
import { TaskModel } from './task/task-model';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-task-list',
  imports: [Task, TaskDetail],
  templateUrl: './tasks-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  taskList = DUMMY_TASKS;
  selectedTask?: TaskModel;
  loggingService = inject(LoggingService);

  selectTask(task: TaskModel) {
    this.selectedTask = this.selectedTask?.id === task.id ? undefined : task;
    this.loggingService.onClickLog();
  }

  updateTask(selectedStatus: TaskModel['status']) {
    this.taskList = this.taskList.map((task) =>
      task.id === this.selectedTask?.id ? { ...task, status: selectedStatus } : task,
    );
    this.selectedTask = this.taskList.find((task) => task.id === this.selectedTask?.id);
  }
}
