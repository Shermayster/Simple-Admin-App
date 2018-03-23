import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  emailValue: string;
  @Output() addEmail = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value, form) {
    this.addEmail.emit(value);
    this.emailValue = '';
    form.resetForm();
  }

}
