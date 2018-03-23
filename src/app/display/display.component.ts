import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailData } from '../shared/email.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() emailList: string[] = [];
  @Output() deleteEmail = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onDelete(email: string, i: number) {
    const emailData: EmailData = {emailIndex: i, emailName: email};
    this.deleteEmail.emit(emailData);
  }

}
