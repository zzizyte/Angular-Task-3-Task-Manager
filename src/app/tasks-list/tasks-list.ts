import { Component, inject } from '@angular/core';
import { Task } from './task/task';
import { TaskDetail } from './task-detail/task-detail';
import { TaskModel } from './task/task-model';
import { LoggingService } from '../logging.service';
import { TasksService } from './task.service';

@Component({
  selector: 'app-task-list',
  imports: [Task, TaskDetail],
  templateUrl: './tasks-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  tasksService = inject(TasksService);
  loggingService = inject(LoggingService);
  taskList = this.tasksService.getAllTasks();
  selectedTask?: TaskModel;

  selectTask(task: TaskModel) {
    this.selectedTask = this.selectedTask?.id === task.id ? undefined : task;
    this.loggingService.onClickLog();
  }

  updateSelectedTask(updatedTask: TaskModel) {
    this.taskList = this.taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task));

    this.selectedTask = updatedTask;
  }
}
