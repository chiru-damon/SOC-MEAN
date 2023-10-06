import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './Components/route1.component';
import { Route2Component } from './Components/route2.component';
import { HomeComponent } from './Components/home.component';
import { SuccessComponent } from './Components/success.component';
import { Route3Component } from './Components/route3.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'one',component:Route1Component},
  {path:'two',component:Route2Component},
  {path:'three',component:Route3Component},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
