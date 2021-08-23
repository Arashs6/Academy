import { RouterModule } from '@angular/router';
import { AcademyModule } from './academy/academy.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcademyModule,
    RouterModule,
    
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]//componentRoot
})
export class AppModule { }
