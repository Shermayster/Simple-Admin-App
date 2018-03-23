import { Component } from '@angular/core';
import { EmailData } from './shared/email.model';
import { LogType, LogData } from './shared/log.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailList: string[] = [];
  logList: LogData[] = [];
  logType = LogType;

  addEmailToList(email: string): void {
    this.emailList = [...this.emailList, email];
    this.addElementToLogList(this.logType.Add, email);
  }

  deleteEmailFromList(emailData: EmailData): void {
    this.emailList = this.emailList.filter((email, index) => index !== emailData.emailIndex);
    this.addElementToLogList(this.logType.Delete, emailData.emailName);
  }

  private addElementToLogList(logType: LogType, elem: string) {
    const logElement: LogData = {type: logType, element: elem};
    this.logList = [...this.logList, logElement];
  }
}
