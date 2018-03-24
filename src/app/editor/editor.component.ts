import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  emailValue: string;
  @Output() addEmail = new EventEmitter();

  onSubmit(value, form) {
    this.addEmail.emit(value);
    form.resetForm();
  }

}
