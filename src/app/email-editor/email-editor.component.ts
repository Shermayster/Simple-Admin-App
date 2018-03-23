import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit {
  @Input() emailList: string[] = [];
  @Output() deleteEmail = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onDelete(email: string) {
    this.deleteEmail.emit(email);
  }

}
