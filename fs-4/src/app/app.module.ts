import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './Components/route1.component';
import { Regis2Component } from './Components/regis2.component';
import { HomeComponent } from './Components/home.component';
import { SuccessComponent } from './Components/success.component';
import { FormsModule } from '@angular/forms';
import { RegisComponent } from './Components/regis.component';
import { LoginComponent } from './Components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Regis2Component,
    RegisComponent,
    HomeComponent,
    SuccessComponent,
    LoginComponent
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
