import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-email-display',
  templateUrl: './email-display.component.html',
  styleUrls: ['./email-display.component.css']
})
export class EmailDisplayComponent implements OnInit {
  emailValue: string;
  @Output() submit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.submit.emit(value);
  }

}
