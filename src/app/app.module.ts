import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EditorComponent } from './editor/editor.component';
import { LoggerComponent } from './logger/logger.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditorComponent,
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
