import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  onDelete(email: string) {
    this.deleteEmail.emit(email);
  }

}
