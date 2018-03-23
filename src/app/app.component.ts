import { Component } from '@angular/core';

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
}
