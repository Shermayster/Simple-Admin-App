import { Component } from '@angular/core';
import { EmailData } from './shared/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emailList: string[] = [];

  addEmailToList(email: string): void {
    this.emailList = [...this.emailList, email];
  }

  deleteEmailFromList(emailData: EmailData): void {
    this.emailList = this.emailList.filter((email, index) => index !== emailData.emailIndex);
  }
}
