import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {ProgressBarModule} from "angular-progress-bar"
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
