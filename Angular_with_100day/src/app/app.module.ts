import { ngForComponent } from './ngFor.component';
import { HelloComponent } from './hello.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, ngForComponent, Day6Component, Day7Component, Day8Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
