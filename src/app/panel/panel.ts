import { Component, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  loggingService = inject(LoggingService);

  ngOnInit() {
    this.loggingService.onInitLog();
  }
}
