import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { EmailDisplayComponent } from './email-display/email-display.component';
import { LoggerComponent } from './logger/logger.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailEditorComponent,
    EmailDisplayComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
