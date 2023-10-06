import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home.component';
import { RegisComponent } from './Components/regis.component';
import { LoginComponent } from './Components/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'regis',component:RegisComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
