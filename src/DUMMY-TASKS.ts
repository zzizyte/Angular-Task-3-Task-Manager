import { TaskModel } from "./app/tasks-list/task/task-model";

export const DUMMY_TASKS: TaskModel[] = [
  {
    id: 't1',
    title: 'Finish Angular lesson',
    description: 'Complete the section about services and dependency injection.',
    priority: 'high',
    status: 'todo',
  },
  {
    id: 't2',
    title: 'Go for a bike ride',
    description: 'Ride for 60 minutes in zone 2.',
    priority: 'medium',
    status: 'done',
  },
  {
    id: 't3',
    title: 'Buy groceries',
    description: 'Milk, eggs, oats, bananas.',
    priority: 'low',
    status: 'todo',
  },
];
