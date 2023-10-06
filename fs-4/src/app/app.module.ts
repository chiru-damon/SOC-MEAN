import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './Components/route1.component';
import { Route2Component } from './Components/route2.component';
import { HomeComponent } from './Components/home.component';
import { SuccessComponent } from './Components/success.component';
import { FormsModule } from '@angular/forms';
import { Route3Component } from './Components/route3.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    HomeComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
