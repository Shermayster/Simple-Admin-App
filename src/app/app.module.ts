import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { EmailDisplayComponent } from './email-display/email-display.component';
import { LoggerComponent } from './logger/logger.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    EmailEditorComponent,
    EmailDisplayComponent,
    LoggerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
