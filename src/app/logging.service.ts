import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  onClickLog() {
    console.log('a task was selected');
  }
  onInitLog() {
    console.log('component was initialized');
  }
  onDestructLog() {
    console.log('component was destroyed');
  }
}
