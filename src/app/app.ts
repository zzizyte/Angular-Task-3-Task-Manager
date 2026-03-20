import { Component } from '@angular/core';
import { TaskList } from "./task-list/task-list";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TaskList]
})
export class App {

}
