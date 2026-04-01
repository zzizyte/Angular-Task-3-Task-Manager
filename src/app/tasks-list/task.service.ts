import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../DUMMY-TASKS';
import { TaskModel } from './task/task-model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  protected taskList: TaskModel[] = DUMMY_TASKS;

  getAllTasks() {
    return [...this.taskList];
  }
}
