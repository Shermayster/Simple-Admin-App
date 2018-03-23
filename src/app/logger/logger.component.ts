import { Component, OnInit, Input } from '@angular/core';
import { LogData, LogType } from '../shared/log.model';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {
  @Input() logList: LogData[] = [];
  logType = LogType;

  constructor() { }
}

