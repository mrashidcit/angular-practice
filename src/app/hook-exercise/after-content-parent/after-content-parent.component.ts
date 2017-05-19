import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styles: ['.parent {background: burlywood;}'],
  providers: [LoggerService]
})
export class AfterContentParentComponent implements OnInit {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
    console.log(this.logs);
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterContentComponent
    // which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

  ngOnInit() {
  }

}
