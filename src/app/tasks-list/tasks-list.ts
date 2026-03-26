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
  selectedIdTask?: TaskModel;
  isSelected: boolean = false;
  loggingService = inject(LoggingService);

  selectTask(selectedItemId: string) {
    this.isSelected = !this.isSelected;
    this.selectedIdTask = this.taskList.find((task) => task.id === selectedItemId);
    this.loggingService.onClickLog();
  }

  updateTask(selectedStatus: TaskModel['status']) {
    this.taskList = this.taskList.map((task) =>
      task.id === this.selectedIdTask?.id ? { ...task, status: selectedStatus } : task,
    );
    this.selectedIdTask = this.taskList.find((task) => task.id === this.selectedIdTask?.id);
  }
}
