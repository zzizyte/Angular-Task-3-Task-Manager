import { Component } from '@angular/core';
import { TaskList } from "./tasks-list/tasks-list";
import { Panel } from "./panel/panel";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TaskList, Panel]
})
export class App {

}
